const { AssetCache } = require("@11ty/eleventy-fetch");
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const UNITS_TABLE = "tblRtXBod9CC0mivK";
const HOUSING_DATABASE_TABLE = "tbl8LUgXQoTYEw2Yh";
const HIGH_CAPACITY_UNIT = 4;  // Bedrooms

// A group of checkboxes for filtering housing results.
function FilterSection(heading, name, options) {
  this.heading = heading;
  this.name = name;
  this.options = options;
}

// A single checkbox for filtering housing results.
function FilterCheckbox(name, label, selected) {
  this.name = name;
  this.label = label || name;
  this.selected = selected || false;
}

// Gets values from all housing units that are relevant to future filtering of 
// results.
const fetchFilterOptions = async() => {
  let options = [];
  const table = base(UNITS_TABLE);

  return table.select({
      view: "API all units",
    })
    .all()
    .then(records => {
      records.forEach(function(record) {
        // TODO(trevorshannon): Figure out how to deal with empty data properly.
        let cityStr = "";
        if (record.get("_CITY") !== undefined) {
          cityStr = record.get("_CITY")[0];
        }
        options.push({
          city: cityStr,
          openStatus: record.get("STATUS"),
          unitType: record.get("TYPE"),
          populationsServed: record.get("_POPULATIONS_SERVED"),
        })
      });
      return options;
    });
};

const filterOptions = async() => {
  console.log("Fetching filter options.");
  let filterOptions = await fetchFilterOptions();
  let cities = [...new Set(filterOptions.map(o => o.city))];
  cities = cities.filter(x => x);
  let openStatuses = [...new Set(filterOptions.map(o => o.openStatus))];
  openStatuses = openStatuses.filter(x => x);
  let unitTypes = [...new Set(filterOptions.map(o => o.unitType))];
  unitTypes = unitTypes.filter(x => x);
  let allPopulationsServed = filterOptions.map(o => o.populationsServed);
  allPopulationsServed = [...new Set(allPopulationsServed.flat())];
  allPopulationsServed = allPopulationsServed.filter(x => x);

  let filterVals = [];
  filterVals.push(new FilterSection("City", "city",
    cities.map(x => new FilterCheckbox(x))));

  // Special handling for some unit types
  // Any "{N} Bedroom" entries that have HIGH_CAPACITY_UNIT or greater bedrooms
  // will get grouped  together into one filter checkbox.
  const unitTypeOptions = [];
  const bedroomSizes = [];
  let bedroomStr = "";
  for (const unitType of unitTypes) {
    const match = unitType.match(/^(\d) ?(bedroom|br)$/i);
    if (match) {
      bedroomSizes.push({num: parseInt(match[1]), str: unitType});
      bedroomStr = match[2];
    }
  }
  const catchallSize = Math.min(Math.max(...bedroomSizes.map(x => x.num)),
    HIGH_CAPACITY_UNIT);
  // Only do grouping if the unit types list includes units with at least
  // HIGH_CAPACITY_UNIT bedrooms.
  if (catchallSize >= HIGH_CAPACITY_UNIT) {
    // Get all unit types that will be grouped together
    const groupedSizes = bedroomSizes.filter(x => x.num >= catchallSize);
    for (const bedroomSize of groupedSizes) {
      const idx = unitTypes.indexOf(bedroomSize.str);
      // Remove it from the unit types list so it can be grouped instead.
      unitTypes.splice(idx, 1);
    }
    // Make a single entry out of all the grouped sizes.
    const groupedStr = groupedSizes.map(x => x.str).join(", ")
    unitTypeOptions.push(new FilterCheckbox(groupedStr, `${HIGH_CAPACITY_UNIT}+ ${bedroomStr}`));
  }
  unitTypeOptions.push(...unitTypes.map(x => new FilterCheckbox(x)));
  filterVals.push(new FilterSection("Type of Unit", "unitType",
    unitTypeOptions));
  
  filterVals.push(new FilterSection("Availability", "availability",
      openStatuses.map(x => new FilterCheckbox(x))));
  filterVals.push(new FilterSection("Populations Served", "populationsServed",
      allPopulationsServed.map(x => new FilterCheckbox(x))));

  console.log("Got filter options.");
  return filterVals;
}


const fetchApartmentRecords = async() => {
  let apartments = [];
  const table = base(HOUSING_DATABASE_TABLE);

  return table.select({
    fields: [
      "DISPLAY_ID",
      "UNITS",
      "APT_NAME",
      "ADDRESS",
      "CITY",
      "PHONE",
      "EMAIL",
      "PROPERTY_URL",
      "LOC_COORDS",
      "VERIFIED_LOC_COORDS",
      "NUM_TOTAL_UNITS",
      "POPULATIONS_SERVED",
      "MIN_RESIDENT_AGE",
      "MAX_RESIDENT_AGE",
      "DISALLOWS_PUBLIC_APPLICATIONS",
      "HAS_WHEELCHAIR_ACCESSIBLE_UNITS",
      "PREFERS_LOCAL_APPLICANTS",
    ],
  })
  .all()
  .then(records => {
    records.forEach(function(record) {
      // Only take apartments that have units associated with them.
      if (record.get("UNITS")) {
        apartments.push({
          id: record.get("DISPLAY_ID"),
          aptName: record.get("APT_NAME"),
          address: record.get("ADDRESS"),
          city: record.get("CITY"),
          locCoords: record.get("LOC_COORDS"),
          verifiedLocCoords: record.get("VERIFIED_LOC_COORDS"),
          phone: record.get("PHONE"),
          website: record.get("PROPERTY_URL"),
          email: record.get("EMAIL"),
          numTotalUnits: record.get("NUM_TOTAL_UNITS"),
          populationsServed: record.get("POPULATIONS_SERVED"),
          minAge: record.get("MIN_RESIDENT_AGE"),
          maxAge: record.get("MAX_RESIDENT_AGE"),
          disallowsPublicApps: record.get(
            "DISALLOWS_PUBLIC_APPLICATIONS"),
          hasWheelchairAccessibleUnits: record.get(
            "HAS_WHEELCHAIR_ACCESSIBLE_UNITS"),
          prefersLocalApplicants: record.get(
            "PREFERS_LOCAL_APPLICANTS"),
        });
      }
    });
    return apartments;
  });
}

// Get housing units from Airtable
const fetchUnitRecords = async() => {
  let units = [];
  const table = base(UNITS_TABLE);

  return table.select({
      fields: [
        "_DISPLAY_ID",
        "TYPE",
        "STATUS",
        "MIN_OCCUPANCY",
        "MAX_OCCUPANCY",
        "PERCENT_AMI",
        "RENT_PER_MONTH_USD",
        "ALTERNATE_RENT_DESCRIPTION",
        "MIN_YEARLY_INCOME_USD",
        "OVERRIDE_MIN_YEARLY_INCOME_USD",
        "MIN_INCOME_RENT_FACTOR",
        "MAX_YEARLY_INCOME_LOW_USD",
        "MAX_YEARLY_INCOME_HIGH_USD",
        ...[...Array(12).keys()].map(n => `MAX_YEARLY_INCOME_HH_${n + 1}_USD`),
      ],
    })
    .all()
    .then(records => {
      records.forEach(function(record) {
        units.push({
          parent_id: record.get("_DISPLAY_ID")?.[0],
          type: record.get("TYPE"),
          openStatus: record.get("STATUS"),
          occupancyLimit: {
            min: record.get("MIN_OCCUPANCY"),
            max: record.get("MAX_OCCUPANCY"),
          },
          incomeBracket: record.get("PERCENT_AMI"),
          rent: {
            amount: record.get("RENT_PER_MONTH_USD"),
            alternateDesc: record.get("ALTERNATE_RENT_DESCRIPTION"),
          },
          minIncome: {
            amount: record.get("MIN_YEARLY_INCOME_USD"),
            isCalculated: !record.get("OVERRIDE_MIN_YEARLY_INCOME_USD"),
            rentFactor: record.get("MIN_INCOME_RENT_FACTOR"),
          },
          maxIncome: {
            low: record.get("MAX_YEARLY_INCOME_LOW_USD"),
            high: record.get("MAX_YEARLY_INCOME_HIGH_USD"),
            byHouseholdSize: {
              ...Object.fromEntries([...Array(12).keys()].map(
                  n => [`size${n + 1}`,
                        record.get(`MAX_YEARLY_INCOME_HH_${n + 1}_USD`)]))
            },
          },
        });
      });
      return units;
    });
}

const housingData = async() => {
  console.log("Fetching apartment and units data.");
  const [apartments, units] = await Promise.all(
    [fetchApartmentRecords(), fetchUnitRecords()]);
  console.log(`got ${apartments.length} apartments and ${units.length} units.`);
  
  // Add the associated units to each apartment
  for (const apartment of apartments) {
    apartment.units = units.filter(u => u.parent_id === apartment.id);
  }
  return apartments;
}


// Returns an object containing a list of FilterSections with each FilterSection
// having a unique list of FilterCheckboxes encompassing all the values
// available in the Airtable data at that time.
module.exports = async function() {
  
  const asset = new AssetCache("affordable_housing_data");
  // This cache duration will only be used at build time.
  let cacheDuration = "1h";
  if(process.env.ELEVENTY_SERVERLESS) {
    // Use the serverless cache location specified in .eleventy.js
    asset.cacheDirectory = "cache"; 
    cacheDuration = "*";  // Infinite duration (data refreshes at each build)
  }
  if (asset.isCacheValid(cacheDuration)) {
    console.log("Returning cached housing and filter data.");
    const data = await asset.getCachedValue();
    return data;
  }

  const [filterVals, housing] = await Promise.all(
    [filterOptions(), housingData()]);
  
  const data = {filterValues: filterVals, housingList: housing};

  await asset.save(data, "json");
  return data;
}