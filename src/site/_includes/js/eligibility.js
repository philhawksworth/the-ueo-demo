const cnst = {
  calfresh: {
    // https://stgenssa.sccgov.org/debs/policy_handbook_Charts/ch-fs.pdf
    // Section 2.1
    FED_POVERTY_LEVEL: [  // USD per month
      1133,
      1526,
      1920,
      2313,
      2706,
      3100,
      3493,
      3886,
    ],
    FED_POVERTY_LEVEL_ADDL_PERSON: 394,  // USD per month per person
    // https://stgenssa.sccgov.org/debs/policy_handbook_calfresh/fschap11.pdf
    // Section 11.8
    GROSS_INCOME_LIMIT_MCE_FACTOR: 2.0,  // Times federal poverty limit
    // https://stgenssa.sccgov.org/debs/policy_handbook_calfresh/fschap19.pdf
    // Section 19.1.3
    SELF_EMPLOYED_EXEMPT_FRACTION: 0.4,
  },
  calworks: {
    // https://stgenssa.sccgov.org/debs/policy_handbook_Charts/ch-afdc.pdf
    // Section 1.2
    MBSAC: [  // USD per month
      807,
      1324,
      1641,
      1947,
      2221,
      2499,
      2746,
      2988,
      3242,
      3519,
    ],
    MBSAC_ADDL_PERSON: 32,  // USD per month per person
    // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap14.pdf
    // Section 14.1
    BASE_RESOURCE_LIMIT: 10888,  // USD
    DISABLED_ELDERLY_RESOURCE_LIMIT: 16333,  // USD
    MIN_ELDERLY_AGE: 60,  // Years
    // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap33.pdf
    // Section 33.3
    EMPLOYMENT_DISREGARD: 450,  // USD per month
    // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap31.pdf
    // Section 31.6.1
    SELF_EMPLOYED_DISREGARD_FRAC: 0.4,
    // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap27.pdf
    // Section 27.9.3
    ONE_CHILD_SUPPORT_DISREGARD: 100,  // USD per month
    TWO_CHILD_SUPPORT_DISREGARD: 200,  // USD per month
    // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap13.pdf
    // Section 13.1.1
    MAX_CHILD_AGE: 18,  // Years
  },
  care: {
    // https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program
    ANNUAL_INCOME_LIMITS: [  // USD per year
      36620,
      36620,
      46060,
      55500,
      64940,
      74380,
      83820,
      93260,
    ],
    ANNUAL_INCOME_LIMIT_ADDL_PERSON: 9440,  // USD per year per person
  },
  fera: {
    // https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program
    ANNUAL_INCOME_LIMITS: [  // USD per year
      57575,  // Min household size 3.
      57575,  // Min household size 3.
      57575,
      69375,
      81175,
      92975,
      104775,
      116575,
    ],
    ANNUAL_INCOME_LIMIT_ADDL_PERSON: 11800,  // USD per year per person
    MIN_HOUSEHOLD_SIZE: 3,  // People
  },
  ga: {
    // https://stgenssa.sccgov.org/debs/policy_handbook_Charts/ch-ga.pdf
    // Section 4.2, UNSHARED Housing in section 4.2.1
    MONTHLY_INCOME_LIMITS: [  // USD per month
      343,
      460,
      576,
      693,
      810,
      926,
      1044,
      1161,
      1278,
      1396,
    ],
    MONTHLY_INCOME_LIMIT_ADDL_PERSON: 11,  // USD per month per person
    // https://stgenssa.sccgov.org/debs/policy_handbook_GA/gachap02.pdf
    // Section 2.3.2
    MIN_ELIGIBLE_AGE: 18,  // Years
    NUM_OF_DEPENDENTS: 0,  // People
    // https://stgenssa.sccgov.org/debs/policy_handbook_GA/gachap08.pdf
    // Section 8.1.5
    MAX_RESOURCES: 500,  // USD
  },
  housingChoice: {
    // https://www.scchousingauthority.org/wp-content/uploads/2022/08/Eng-_Interest_List_Flyer.pdf
    MIN_ELIGIBLE_AGE: 18,
    // For income limits additional person calculations
    // https://www.huduser.gov/portal/datasets/il/il2022/2022IlCalc.odn?inputname=Santa+Clara+County&area_id=METRO41940M41940&fips=0608599999&type=county&year=2022&yy=22&stname=California&stusps=CA&statefp=06&ACS_Survey=%24ACS_Survey%24&State_Count=%24State_Count%24&areaname=San+Jose-Sunnyvale-Santa+Clara%2C+CA+HUD+Metro+FMR+Area&incpath=%24incpath%24&level=50
    INCOME_ROUND_UP_TO_NEAREST: 50,  // USD
    BASE_HOUSEHOLD_SIZE: 4,  // People
    FAMILY_SIZE_ADJ_8: 1.32,
    INCREMENTAL_ADJ: 0.08,
    // https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982#p-982.201(b)(1)(i)
    // See "very low income" here:
    // https://www.huduser.gov/portal/datasets/il/il2022/2022summary.odn?states=6.0&data=2022&inputname=METRO41940M41940*0608599999%2BSanta+Clara+County&stname=California&statefp=06&year=2022&selection_type=county
    ANNUAL_INCOME_LIMITS: [  // USD per month
      59000,
      67400,
      75850,
      84250,
      91000,
      97750,
      104500,
      111250,
    ],
  },
  ihss: {
    // https://socialservices.sccgov.org/other-services/in-home-supportive-services/in-home-supportive-services-recipients
    MIN_ELDERLY_AGE: 65,  // Years
  },
  lifeline: {
    // https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/lifeline/california-lifeline-eligibility#qualify
    ANNUAL_INCOME_LIMITS: [  // USD per year
      28700,
      28700,
      33300,
      40600,
    ],
    ANNUAL_INCOME_LIMIT_ADDL_PERSON: 7300,  // USD per year per person
  },
  liheap: {
    // https://www.csd.ca.gov/Pages/LIHEAP-Income-Eligibility.aspx
    //
    // LIHEAP income limits are set at 60% of State Median Income:
    //   https://www.acf.hhs.gov/ocs/policy-guidance/liheap-im-2022-04-state-median-income-estimates-optional-use-ffy-2022-and
    //
    // Calculating income limit for various household sizes by multiplying the 4-person limit by various values:
    //   https://www.acf.hhs.gov/sites/default/files/documents/ocs/COMM_LIHEAP_Att1SMITable_FY2023.pdf
    MONTHLY_INCOME_LIMITS: [  // USD per month
      2700.17,
      3531.0,
      4361.83,
      5192.75,
      6023.59,
      6854.43,
      7010.21,
      7166.0,
      7321.78,
      7477.56,
    ],
    MONTHLY_INCOME_LIMIT_ADDL_PERSON: 155.78,  // USD per month
  },
  noFeeId: {
    // https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/identification-id-cards/
    MIN_ELIGIBLE_AGE: 62,  // Years
  },
  ssiCapi: {
    // https://www.ssa.gov/oact/cola/sga.html
    SGA_NON_BLIND: 1470,  // USD per month
    SGA_BLIND: 2460,  // USD per month
    // https://www.ssa.gov/pubs/EN-05-11125.pdf
    // Note these max benefit amounts include the California state supplement.
    // TODO: Handle other living categories (e.g. non-medical out-of-home care).
    MAX_BENEFIT_NON_BLIND: 1133.73,  // USD per month
    MAX_BENEFIT_NON_BLIND_NO_KITCHEN: 1251.74,  // USD per month
    MAX_BENEFIT_BLIND: 1211,  // USD per month
    // https://www.ssa.gov/ssi/text-resources-ussi.htm
    MAX_RESOURCES: 2000,  // USD
    // https://www.ssa.gov/oact/cola/incomexcluded.html
    MAX_UNEARNED_INCOME_EXCLUSION: 20,  // USD per month
    MAX_EARNED_INCOME_EXCLUSION: 65,  // USD per month
    EARNED_INCOME_EXCLUSION_FACTOR: 0.5,
    // https://www.ssa.gov/ssi/text-eligibility-ussi.htm
    MIN_ELDERLY_AGE: 65,  // Years
  },
  vaPension: {
    // https://www.va.gov/pension/eligibility/
    MIN_ELDERLY_AGE: 65,  // Years
    MIN_EARLY_DUTY_DURATION: 90,  // days
    MIN_LATE_DUTY_DURATION: 730,  // days
    EARLY_DUTY_BEFORE: '1980-09-08',  // YYYY-MM-DD
    LATE_DUTY_AFTER: '1980-09-07',  // YYYY-MM-DD
    // Each wartime period is defined as a two-element array.  First the
    // start date, then the end date.  Dates are given as strings with the
    // format YYYY-MM-DD.  An empty string is intepreted as "today"
    WARTIMES: [
      ['1916-05-09', '1917-04-05'],  // Mexican Border period
      ['1917-04-05', '1918-11-11'],  // WWI
      ['1941-12-07', '1946-12-31'],  // WWII
      ['1950-06-27', '1955-01-31'],  // Korean conflict
      ['1955-11-01', '1975-05-07'],  // Vietnam War, in Vietnam
      ['1964-08-05', '1975-05-07'],  // Vietnam War, out of Vietnam
      ['1990-08-02', ''],            // Gulf war, no end date yet.
    ],
    // https://www.va.gov/pension/veterans-pension-rates/
    ANNUAL_NET_WORTH_LIMIT: 150538,  // USD per year
    // TODO: Somehow handle higher income limits for housebound and
    // aid & attendance disabilities
    ANNUAL_INCOME_LIMITS: [  // USD per year
      16037,
      21001,
    ],
    ANNUAL_INCOME_LIMIT_ADDL_DEPENDENT: 2743,  // USD per year
    MAX_DEPENDENT_ANNUAL_WAGES_EXCLUSION: 13850,  // USD per year
  },
  wic: {
    // https://www.cdph.ca.gov/Programs/CFH/DWICSN/CDPH%20Document%20Library/LocalAgencies/WPPM/980-1060WICIncomeGuidelinesTable.pdf
    MONTHLY_INCOME_LIMITS: [  // USD per month
      2096,
      2823,
      3551,
      4279,
      5006,
      5734,
      6462,
      7189,
    ],
    MONTHLY_INCOME_LIMIT_ADDL_PERSON: 728,  // USD per month per person
    // https://www.ecfr.gov/current/title-7/subtitle-B/chapter-II/subchapter-A/part-246#p-246.2(Children)
    CHILD_EXIT_AGE: 5,  // Birthday at which a child is ineligible.
  },
};

// This global variable holds the current state of the form navigation.
let currentPage;

function hasNulls(...values) {
  return values.some(v => v === null || Number.isNaN(v));
}

function throwIfUndefined(...values) {
  if (values.some(v => v === undefined)) {
    throw new Error('A logic input value was undefined');
  }
}

// Custom boolean "or" logic that propagates null values.  Rather than
// coercing a null value into false, null values are retained.  If the
// result of this operation is not determined, e.g. or(false, null) then
// null will be returned. Otherwise, the boolean result of or'ing all
// statements together will be returned.
//
// null or true = true
// null or false = null
// null or null = null
function or(...stmts) {
  throwIfUndefined(...stmts);
  // Convert all values that are not null to booleans
  stmts = stmts.map(s => s === null ? null : !!s);
  // The result is determined only if at least one statement is true or
  // everything is false.
  const anyTrue = stmts.some(b => b);
  const determined = (
    anyTrue || stmts.every(b => b === false));
  if (!determined) {
    return null;
  }
  return anyTrue;
}

// Custom boolean "and" logic that propagates null values.  Rather than
// coercing a null value into false, null values are retained.  If the
// result of this operation is not determined, e.g. and(true, null) then
// null will be returned.  Otherwise, the boolean result of and'ing all
// statements together will be returned.
//
// null and true = null
// null and false = false
// null and null = null
function and(...stmts) {
  throwIfUndefined(...stmts);
  // Convert all values that are not null to booleans
  stmts = stmts.map(s => s === null ? null : !!s);
  // The result is determined only if at least one statement is false or
  // everything is true.
  const allTrue = stmts.every(b => b);
  const determined = (
    stmts.some(b => b === false) || allTrue);
  if (!determined) {
    return null;
  }
  return allTrue;
}

// Custom boolean "not" logic that propagates null values.  Rather than
// coercing a null value into false, this will return null if the input
// statement is null.  Otherwise, the boolean result of not'ing the statement
// will be returned.
//
// not true = false
// not false = true
// not null = null
function not(stmt) {
  throwIfUndefined(stmt);
  if (stmt === null) {
    return null;
  }
  return !stmt;
}

// Custom equality operator that returns null if either operand is null.
// Otherwise, returns the boolean result of a == b.
function eq(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a == b;
}

// Custom inequality operator that returns null if either operand is null.
// Otherwise, returns the boolean result of a != b.
function ne(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a != b;
}

// Custom less-than operator that returns null if either operand is null.
// Otherwise, returns the boolean result of a < b.
function lt(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a < b;
}

// Custom greater-than operator that returns null if either operand is null.
// Otherwise returns the boolean result of a > b.
function gt(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a > b;
}

// Custom less-than-equal-to operator that returns null if either operand
// is null. Otherwise returns the boolean result of a <= b.
function le(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a <= b;
}

// Custom greater-than-equal-to operator that returns null if either operand
// is null. Otherwise returns the boolean result of a >= b.
function ge(a, b) {
  throwIfUndefined(a, b);
  if (hasNulls(a, b)) {
    return null;
  }
  return a >= b;
}

function add(a, b) {
  return a + b;
}

// Converts "the-test-string", "the_test_string", or "the test string" to
// "theTestString".
const toCamelCase = function(str) {
  const words = str.trim().toLowerCase().split(/[-_\s]/);
  const result = [];
  result.push(words[0]);
  for (const word of words.slice(1)) {
    result.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
  }
  return result.join('');
}

// Formats a value as USD with no decimals (always rounding up).
const usdLimit = function(value) {
  const num = Math.ceil(Number(value));
  if (isNaN(num) || value === null) {
    return "the limit";
  } else {
    return num.toLocaleString("en-US",
    {
      style: "currency",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
      currency: "USD"
    });
  }
}

function isOneOf(value, allowedValues) {
  const allowedValuesArr = [].concat(allowedValues);
  return or(...allowedValuesArr.map(v => eq(value, v)));
}

function indexOfAll(arr, value) {
  const matchingIdxs = arr.map((v, idx) => v == value ? idx : -1);
  return matchingIdxs.filter(i => i >= 0);
}

function dateStrToLocal(dateStr) {
  return `${dateStr}T00:00`;
}

function getNumberOfDays(start, end) {
  // One day in milliseconds.
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Create new dates from the input values in case either is NaN.
  const startDate = new Date(start);
  const endDate = new Date(end);
  // Make everything UTC because there is no daylight savings time in UTC (one
  // day is *always* ONE_DAY milliseconds)
  const startUtc = Date.UTC(
    startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endUtc = Date.UTC(
    endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  // Time difference between two dates.
  const difference = endUtc - startUtc;

  // Number of days between two dates.
  return difference / ONE_DAY;
}

function formatUsDate(date) {
  const date1 = new Date(date);
  return `${date1.getMonth() + 1}/${date1.getDate()}/${date1.getFullYear()}`;
}

// Converts a date string to a Date or returns a Date corresponding to today if
// the input string is empty.
function dateOrToday(inputStr) {
  if (inputStr) {
    return new Date(dateStrToLocal(inputStr));
  }
  let today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  return today;
}

// Returns true if the time period defined by 'start' and 'end' overlaps at
// least one interval in the list of 'intervals'.
//
// The 'intervals' parameter should be a list of objects with 'start' and 'end'
// properties. All 'start' and 'end' (input parameters and object properties)
// should be Dates.
//
// This function will return null if the 'start' or 'end' is null.
function withinInterval(start, end, intervals) {
  return or(
    ...intervals.map(i => and(
      le(start, i.end),
      ge(end, i.start))
    ));
}

// Shows or hides the element 'elem' via a class name.
function setElementVisibility(elem, makeVisible) {
  if (elem) {
    if (makeVisible) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  }
}

// Makes the submit button visible or hidden.
function setSubmitVisibility(makeVisible) {
  const submitButton = document.getElementById("submit-button");
  setElementVisibility(submitButton, makeVisible);
}

// Makes the next button visible or hidden.
function setNextVisibility(makeVisible) {
  const nextButton = document.getElementById("next-button");
  setElementVisibility(nextButton, makeVisible);
}

// Makes the back button visible or hidden.
function setBackVisibility(makeVisible) {
  const backButton = document.getElementById("back-button");
  setElementVisibility(backButton, makeVisible);
}

// Resets the viewport scroll so that the top of the form is visible.
function resetScroll() {
  document.getElementById("form-top").scrollIntoView();
}

// Asks the user to confirm they want to leave.
function confirmExit(event) {
  event.preventDefault();
  return event.returnValue = "Are you sure you want to exit?";
}

// Called when the user inputs data into a form element.
function onInput(event) {
  // As soon as the user enters any data at all, register the beforeonload
  // event listener so that they can confirm they want to exit the form
  // when an unload is about to happen.
  addEventListener("beforeunload", confirmExit);
}

function onHouseholdMemberAdd() {
  const nameInputs = document.querySelectorAll(
    'input[id^="hh-member-name"]');
  for (const input of nameInputs) {
    // First remove any existing listeners that may have been already
    // added so we don't get duplicates.
    input.removeEventListener('change', onChangeName);
    input.addEventListener('change', onChangeName);
  }

  // Get the household member that was just added.
  const newMember = this.closest('.elig_page').querySelector(
    'ul.dynamic_field_list').lastChild;
  newMember.incomeLists = [];

  // Insert an income fieldset for that new member in each income page.
  const incomePages = document.querySelectorAll(
    'div[id^="page-income-"]');
  for (const incomePage of incomePages) {
    const firstFieldset = incomePage.querySelector('fieldset');
    const newFieldset = firstFieldset.cloneNode(true);
    setMemberIncomeHeading(newFieldset,
      newMember.querySelector('h4').textContent);
    // Remove all items from the new list
    const itemsToRemove = newFieldset.querySelectorAll(
      'ul.dynamic_field_list>li:not([data-static-item])');
    for (const item of itemsToRemove) {
      removeDynamicFieldListItem(item);
    }

    // Ensure IDs are unique, and update input labels to match.
    const templ = newFieldset.querySelector('template');
    const idModifier = `-member${newMember.dynamicFieldListId}`;
    modifyIds(templ.content, idModifier);

    addDynamicFieldListListeners(newFieldset);

    firstFieldset.parentNode.appendChild(newFieldset);
    newMember.incomeLists.push(newFieldset);
  }
}

function onChangeNoIncome() {
  let wrapper = document.getElementById("income-types");
  let allIncomeTypes = wrapper.querySelectorAll("input[type=checkbox]");
  for (const incomeType of allIncomeTypes) {
    if (incomeType == this) {
      continue;
    }
    let label = wrapper.querySelector(`label[for="${incomeType.id}"]`);
    if (this.checked) {
      incomeType.checked = false;
      incomeType.setAttribute("disabled", "disabled");
      label.classList.add("disabled");
    } else {
      incomeType.removeAttribute("disabled");
      label.classList.remove("disabled");
    }
  }
}

function onChangeAge() {
  document.getElementById("hh-myself-age").value = this.value;
  document.getElementById("age").value = this.value;
}

function onChangeName() {
  // TODO: Revert to placeholder if the name is deleted.
  const item = this.closest('ul.dynamic_field_list>li');
  // Update the heading to the household member's name.
  item.querySelector('h4').textContent = this.value;
  // Also update the headings in all the income details pages.
  for (const incomeList of item.incomeLists) {
    setMemberIncomeHeading(incomeList, this.value);
  }
}

// Helper function to add the correct class name to a displayed condition.
function addConditionIcon(listItem, met,
    {displayMet=true, displayUnmet=true, displayUnk=true}={}) {
  let cls = '';
  if (met == null && displayUnk) {
    cls = 'condition__unk';
  } else if (!met && displayUnmet) {
    cls = 'condition__unmet';
  } else if (met && displayMet) {
    cls = 'condition__met';
  }
  listItem.className = `condition ${cls}`;
}

function setMemberIncomeHeading(incomeFieldset, value) {
  incomeFieldset.querySelector('legend').textContent = value;
}

function modifyIds(parent, idModifier) {
  const elems = parent.querySelectorAll('[id], [for]');
  for (const elem of elems) {
    if (elem.id) {
      elem.id = elem.id + idModifier;
    }
    const forAttr = elem.getAttribute('for');
    if (forAttr) {
      elem.setAttribute('for', forAttr + idModifier);
    }
  }
}

function clearInputs(parent) {
  const inputs = parent.querySelectorAll('input, select');
  for (const elem of inputs) {
    if (elem.value) {
      elem.value = '';
    }
    if (elem.checked) {
      elem.checked = false;
    }
  }
}

// Adds an item to a dynamic list of fields.
function addDynamicFieldListItem() {
  // TODO: update to use .closest()
  const list = this.parentElement.parentElement.querySelector(
    "ul.dynamic_field_list");
  const items = list.querySelectorAll("li");
  // Figure out the largest id index used so far.
  // TODO: replace optional chaining operators.
  const lastInput = items[items.length - 1]?.querySelector("input");
  let lastIdNumber = -1;
  if (lastInput) {
    lastIdNumber = Number(lastInput.id.match(/-\d+$/g)?.[0]?.slice(1)) || 0;
  }
  // Create a new item using a template tag or, if none is present, the first
  // item in the list as a template.
  const template = list.querySelector("template");
  let newItem;
  if (template) {
    newItem = document.createElement("li")
    newItem.appendChild(template.content.cloneNode(true));
  } else {
    newItem = items[0].cloneNode(true);
  }
  const newIdNumber = lastIdNumber + 1;
  // Save the reference ID for later access.
  newItem.dynamicFieldListId = newIdNumber;
  // Ensure element ids are unique and clear out any inputs that a user may
  // have entered on the template list item.
  modifyIds(newItem, `-${newIdNumber}`);
  clearInputs(newItem);

  // Update the item heading if there is one.
  const itemHeading = newItem.querySelector("h3,h4,h5,h6");
  if (itemHeading) {
    // Add one for 1 indexing of headings vs 0 indexing of IDs.
    itemHeading.textContent = itemHeading.textContent.replace(
      /\d+$/, newIdNumber + 1);
  }
  // Add a remove button for the new item.
  const removeButton = document.createElement("button");
  removeButton.classList.add("link");
  removeButton.textContent = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", onDynamicFieldListRemove);
  const fragment = new DocumentFragment();
  fragment.append(" (", removeButton, ")");
  // If there is a heading, put the remove button after it.  Otherwise,
  // make it the first element in the list item.
  if (itemHeading) {
    itemHeading.after(fragment);
  } else {
    newItem.prepend(fragment);
  }
  // Add our new item to the list.
  list.appendChild(newItem);
  updateDynamicFieldListButton(this);
}

function removeDynamicFieldListItem(listItem) {
  const list = listItem.parentElement;

  // If the item is a household member, it will have associated income lists.
  if (listItem.incomeLists) {
    for (const fieldset of listItem.incomeLists) {
      const parent = fieldset.parentElement;
      fieldset.remove();
      parent.dispatchEvent(
        new Event("input", {bubbles: true, cancelable: false}));
    }
  }

  listItem.remove();
  // Can't dispatch the event on the item since it's removed.
  list.dispatchEvent(
    new Event("input", {bubbles: true, cancelable: false}));
  const fieldListButton = (
    list.parentElement.querySelector('button.field_list_add'));
  updateDynamicFieldListButton(fieldListButton);
}

function onDynamicFieldListRemove() {
  removeDynamicFieldListItem(this.closest('li'));
}

function updateDynamicFieldListButton(button) {
  const wrapper = button.closest('.dynamic_field_list_wrapper');
  const items = wrapper.querySelectorAll('ul.dynamic_field_list>li');
  if (items.length) {
    button.textContent = button.dataset.nonEmptyText;
  } else {
    button.textContent = button.dataset.emptyText || button.dataset.nonEmptyText;
  }
}

function updateIncomeTotal() {
  const page = this.closest('.elig_page');
  const totalDisplay = page.querySelector('.total');
  const inputs = page.querySelectorAll('input[type=number]');
  let sum = 0;
  for (input of inputs) {
    sum += Number(input.value);
  }
  sum = sum.toFixed(2);
  const intSum = parseInt(sum);
  if (sum - intSum === 0) {
    sum = intSum;
  }
  totalDisplay.textContent = sum.toLocaleString("en-US");
}

// Marks the section as complete in the step indicator.
function markSectionDone(section) {
  if (section.stepButton) {
    section.stepButton.classList.remove("todo");
    section.stepButton.classList.add("done");
  }
}

// Shows the appropriate buttons for the given 'page'.
function configureButtons(page) {
  let resultsPage = !page.next();
  // TODO: Is there a better way than hard-coding this ID here?
  let finalInputPage = page.next()?.id == 'page-results'
  let firstPage = !page.previous;
  if (finalInputPage) {
    // This is the last page with user input, so show a submit button rather
    // than a generic next button.
    setBackVisibility(true);
    setNextVisibility(false);
    setSubmitVisibility(true);
  } else if (firstPage) {
    // This is the first page, so only show the next button.
    setBackVisibility(false);
    setNextVisibility(true);
    setSubmitVisibility(false);
  } else if (resultsPage) {
    // This is the very last page, so only show the back button.
    setBackVisibility(true);
    setNextVisibility(false);
    setSubmitVisibility(false);
  } else {
    // This is a regular page, so show back an next buttons.
    setBackVisibility(true);
    setNextVisibility(true);
    setSubmitVisibility(false);
  }
}

// Inserts a step indicator in the DOM based on the sections defined.
// The step indicator serves two purposes:
//   1. Show progress through the form
//   2. Enable navigation back to already-completed sections
// Note the text shown for each step in the progress indicator will be
// the same as the <h2> text under each section element.  If a section does
// not have a level 2 heading, no step indicator for that section will be
// added.
function buildStepIndicator() {
  const allSections = document.querySelectorAll("div.elig_section");
  const stepIndicatorList = document.querySelector("div.step_indicator ul");
  for (const section of allSections) {
    // TODO: Support different text for the h2 and the step indicator.
    const heading = section.querySelector("h2");
    if (!heading) {
      // The section does not have a heading (e.g. intro) so don't put this
      // section in the step indicator.
      continue;
    }
    // Make the button that will be used for navigation to already-completed
    // sections.
    const button = document.createElement("button");
    button.id = `nav-${section.id}`;
    button.dataset.sectionId = section.id;
    button.textContent = heading.textContent;
    // Sections are to-do and un-clickable by default.  They will become
    // clickable when the corresponding section is completed by the user.
    button.className = "todo";
    button.disabled = true;
    button.addEventListener("click", toSection);
    // Store a reference to the step indicator button in the section element
    // for easier access later.
    section.stepButton = button;
    // Make a container for the button.
    const listItem = document.createElement("li");
    // Put the button in the container and add it to the step indicator.
    listItem.appendChild(button);
    stepIndicatorList.appendChild(listItem);
  }
}

// Switches the form to the page 'toPage'.
// The old page will be hidden and 'toPage' will be shown.  If the two pages
// are in different sections, the old section will be hidden and the new
// section containing 'toPage' will be shown.
function switchToPage(toPage) {
  // Show the new page and hide the old.
  setElementVisibility(currentPage, false);
  setElementVisibility(toPage, true);
  // Check if the section is changing while also allowing toPage or
  // currentPage to be undefined.
  if (toPage?.section.id != currentPage?.section.id) {
    setElementVisibility(currentPage?.section, false);
    setElementVisibility(toPage?.section, true);
    // Update the step indicator to highlight the active section.
    if (currentPage?.section?.stepButton) {
      currentPage.section.stepButton.classList.remove("in_progress");
    }
    if (toPage?.section?.stepButton) {
      toPage.section.stepButton.classList.add("in_progress");
      // Always allow users to navigate directly to sections they have started
      // even if the section is not complete yet.
      toPage.section.stepButton.disabled = false;
    }
  }
  configureButtons(toPage);
  resetScroll();
  currentPage = toPage;
}

// Brings the user to the first page of a section.
// This function is used as a step indicator click handler, and 'this'
// represents the context of the event, i.e. the button that was clicked.
function toSection() {
  const section = document.getElementById(this.dataset.sectionId);
  if (section.id == "section-results") {
    // Ensure results are always up-to-date prior to showing them.
    // TODO: Determine if it would be better to invalidate results on
    // form data change and require the user to click the submit button
    // again before viewing results again.
    computeEligibility();
  }
  // Find the first page in the section.
  const toPage = section.querySelector("div.elig_page");
  if (toPage) {
    switchToPage(toPage);
  }
}

// Moves to the next form page in the sequence.
// The sequence used is the one defined in linkPages.
function toNextPage() {
  const nextPage = currentPage.next();
  if (nextPage) {
    if (nextPage.section.id != currentPage.section.id) {
      // We are moving into a new section, so the old section should be
      // marked as completed.
      markSectionDone(currentPage.section);
    }
    // Take note of the page we are coming from to allow backwards travel with
    // the Back form control button.
    nextPage.previous = currentPage;
    switchToPage(nextPage);
  }
}

// Moves to the previous form page in the sequence.
// This is not necessarily the form page the user was just on (for example, if
// they used the step progress indicator to revisit a completed section).
// Rather it can be thought of as the previous page as defined by the page
// sequence from linkPages().
function toPrevPage() {
  // Note currentPage.previous is set by toNextPage().
  const previousPage = currentPage.previous;
  if (previousPage) {
    switchToPage(previousPage);
  }
}

// "Submits" the form.
// Note no data is actually submitted anywhere, and instead the form inputs
// are read and processed by computeEligibility().
function submitForm() {
  computeEligibility();
  // Make the results page visible upon submit.
  // The submit button acts a lot like a next button preceding the results
  // section.
  toNextPage();
  // The results section should immediately be marked done, since there are
  // no form fields to fill out in that section.
  markSectionDone(currentPage.section);
}

function addDynamicFieldListListeners(parent) {
  const fieldListAddButtons = parent.querySelectorAll(
    'button.field_list_add');
  for (const button of fieldListAddButtons) {
    button.addEventListener("click", addDynamicFieldListItem);
  }
}

// Sets up listeners for the document.
function addListeners() {
  // Form inputs
  const inputs = document.querySelectorAll("input, textarea, select");
  for (const input of inputs) {
    input.addEventListener("input", onInput);
  }

  addDynamicFieldListListeners(document);
  const incomeLists = document.querySelectorAll("#section-income .income_details_wrapper");
  for (const incomeList of incomeLists) {
    incomeList.addEventListener("input", updateIncomeTotal);
  }
  document.getElementById("income-has-none").addEventListener("change", onChangeNoIncome);
  document.getElementById("age").addEventListener("change", onChangeAge);
  document.getElementById("hh-myself-age").addEventListener("change", onChangeAge);

  document.querySelector(
    '#page-household-members button.field_list_add').addEventListener(
    'click', onHouseholdMemberAdd);

  // Form control buttons
  document.getElementById("next-button").addEventListener("click", toNextPage);
  document.getElementById("back-button").addEventListener("click", toPrevPage);
  document.getElementById("submit-button").addEventListener("click", submitForm);
  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT")){
      event.preventDefault();
      const actionButton = document.querySelector("#controls button.btn_primary:not(.hidden)");
      if (actionButton) {
        actionButton.click();
      }
    }
  });
}

// Switches to the first form page in the document.
function showFirstPage() {
  switchToPage(document.querySelector("div.elig_page"));
}

// Initializes the user interface.
function initUi() {
  buildStepIndicator();
  // All pages and sections are initially hidden by default.
  showFirstPage();
  // Reset the auto-scroll that occurs after showFirstPage().
  window.scrollTo(0, 0);
  const fieldListAddButtons = document.querySelectorAll(
    'button.field_list_add');
  for (const button of fieldListAddButtons) {
    updateDynamicFieldListButton(button);
  }
}

// Gets all page elements and links them together in sequence.
// The link is made via a new method on each page element called next().
// This also adds the 'section' property to page elements for convenient
// access to the containing section element.
function linkPages() {
  const pages = document.querySelectorAll("div.elig_page");
  const pageById = {};
  for (let j = 0; j < pages.length; j++) {
    // Alias the parent element as 'section' for convenience.
    pages[j].section = pages[j].parentElement;
    // By default, each page will advance to the next page in the sequence,
    // regardless of form input.  For conditional next-page selection,
    // add the logic to customPageLinking().
    pages[j].next = function() {
      return pages[j + 1];
    };
    // Store a hash map of page id to the page itself for faster page
    // retrieval when defining custom page linking.
    pageById[pages[j].id] = pages[j];
  }
  customPageLinking(pageById);
}

// Holder for all page advancing logic that is more complex than simply
// "the next page in the sequence".
function customPageLinking(pageById) {

  pageById["page-yourself-start"].next = function() {
    if (document.getElementById("age").value < 18 && document.getElementById("age").value > 0) {
      return pageById["page-head-of-household"];
    }
    return pageById["page-head-of-household"].next();
  };

  pageById["page-head-of-household"].next = function() {
    if (document.getElementById("disabled").checked || document.getElementById("blind").checked || document.getElementById("deaf").checked) {
      const militaryQuestion = document.getElementById(
        "military-disability-wrapper");
      if (document.getElementById("veteran").checked) {
        militaryQuestion.classList.remove("hidden");
      } else {
        militaryQuestion.classList.add("hidden");
      }
      return pageById["page-disability-details"];
    }
    return pageById["page-disability-details"].next();
  };

  pageById["page-disability-details"].next = function() {
    if (document.getElementById("veteran").checked) {
      return pageById["page-veteran-details"];
    }
    return pageById["page-veteran-details"].next();
  };

  pageById["page-veteran-details"].next = function() {
    const fromDate = getDateOrNan("served-from");
    const untilDate = getDateOrNan("served-until");
    if (document.getElementById("veteran").checked &&
        getNumberOfDays(fromDate, untilDate) < 730) {
      const fromPlaceHolder = document.getElementById("served-from-placeholder");
      fromPlaceHolder.textContent = formatUsDate(fromDate);

      const untilPlaceHolder = document.getElementById("served-until-placeholder");
      untilPlaceHolder.textContent = formatUsDate(untilDate);

      return pageById["page-veteran-duty-period"];
    }
    return pageById["page-veteran-duty-period"].next();
  };

  pageById["page-veteran-duty-period"].next = function() {
    if (document.getElementById("not-citizen").checked) {
      return pageById["page-immigration-status"];
    }
    return pageById["page-immigration-status"].next();
  };

  pageById["page-household-members"].next = function() {
    const hhPregnant = getValuesOrNulls('hh-member-pregnant');
    if (document.getElementById('pregnant').checked ||
        hhPregnant.some(p => p)) {
      return pageById["page-household-unborn-members"];
    }
    return pageById["page-household-situation"];
  }


  pageById["page-household-situation"].next = function() {
    if (document.getElementById("housed").checked || document.getElementById("unlisted-stable-place").checked) {
      return pageById["page-household-housed"];
    }
    return pageById["page-household-housed"].next();
  };


  pageById["page-income"].next = function() {
    if (document.getElementById("income-has-wages").checked) {
      return pageById["page-income-details-wages"];
    }
    return pageById["page-income-details-wages"].next();
  };

  pageById["page-income-details-wages"].next = function() {
    if (document.getElementById("income-has-self-employed").checked) {
      return pageById["page-income-details-self-employed"];
    }
    return pageById["page-income-details-self-employed"].next();
  };

  pageById["page-income-details-self-employed"].next = function() {
    if (document.getElementById("income-has-disability").checked) {
      return pageById["page-income-details-disability"];
    }
    return pageById["page-income-details-disability"].next();
  };

  pageById["page-income-details-disability"].next = function() {
    if (document.getElementById("income-has-unemployment").checked) {
      return pageById["page-income-details-unemployment"];
    }
    return pageById["page-income-details-unemployment"].next();
  };

  pageById["page-income-details-unemployment"].next = function() {
    if (document.getElementById("income-has-retirement").checked) {
      return pageById["page-income-details-retirement"];
    }
    return pageById["page-income-details-retirement"].next();
  };

  pageById["page-income-details-retirement"].next = function() {
    if (document.getElementById("income-has-veterans").checked) {
      return pageById["page-income-details-veterans"];
    }
    return pageById["page-income-details-veterans"].next();
  };

  pageById["page-income-details-veterans"].next = function() {
    if (document.getElementById("income-has-workers-comp").checked) {
      return pageById["page-income-details-workers-comp"];
    }
    return pageById["page-income-details-workers-comp"].next();
  };

  pageById["page-income-details-workers-comp"].next = function() {
    if (document.getElementById("income-has-child-support").checked) {
      return pageById["page-income-details-child-support"];
    }
    return pageById["page-income-details-child-support"].next();
  };

  pageById["page-income-details-child-support"].next = function() {
    if (document.getElementById("income-has-other").checked) {
      return pageById["page-income-details-other"];
    }
    return pageById["page-income-details-other"].next();
  };

}

function getValueOrNull(id) {
  const elem = document.getElementById(id);
  let val;
  if (elem.type === 'checkbox' || elem.type === 'radio') {
    val = elem.checked;
  } else if (elem.tagName.toLowerCase() === 'ul' &&
      elem.classList.contains('singleselect')) {
    const selected = elem.querySelector('li>input:checked');
    val = selected ? selected.id : null;
  } else {
    val = elem.value;
  }
  if (val === '') {
    return null;
  }
  return val;
}

function getDateOrNan(id) {
  const dateStr = getValueOrNull(id);
  if (dateStr === null) {
    return NaN;
  }
  return new Date(dateStrToLocal(dateStr));
}

// Gets values for all input elements with id starting with 'idPrefix'.
function getValuesOrNulls(idPrefix) {
  return Array.from(document.querySelectorAll(
    `input[id^="${idPrefix}"]`), e => getValueOrNull(e.id));
}

function categoryTotal(incomeArray, hhMemberIdx=null) {
  // TODO: Check for invalid income here?
  if (hhMemberIdx === null) {
    // Return income category total for entire household.
    return incomeArray.flat().reduce(add, 0);
  }
  hhMemberIdx = [].concat(hhMemberIdx);
  let sum = 0;
  for (const idx of hhMemberIdx) {
    if (idx < 0 || idx > incomeArray.length - 1) {
      continue;
    }
    sum += incomeArray[idx].reduce(add, 0);
  }
  return sum;
}

function totalEarnedIncome(input, hhMemberIdx=null) {
  if (!input.income.valid) {
    return NaN;
  }
  // TODO: Do not hardcode this list.
  const EARNED_INCOME = [
    input.income.wages,
    input.income.selfEmployed,
  ];
  return EARNED_INCOME.map(i => categoryTotal(i, hhMemberIdx)).reduce(add, 0);
}

function totalUnearnedIncome(input, hhMemberIdx=null) {
  if (!input.income.valid) {
    return NaN;
  }
  // TODO: Do not hardcode this list.
  const UNEARNED_INCOME = [
    input.income.disability,
    input.income.unemployment,
    input.income.veterans,
    input.income.workersComp,
    input.income.childSupport,
    input.income.retirement,
    input.income.other,
  ]
  return UNEARNED_INCOME.map(i => categoryTotal(i, hhMemberIdx)).reduce(add, 0);
}

function grossIncome(input, hhMemberIdx=null) {
  return (
    totalEarnedIncome(input, hhMemberIdx) +
    totalUnearnedIncome(input, hhMemberIdx));
}

function totalResources(input, hhMemberIdx=null) {
  // TODO: Add checkbox for users to explicitly specify they have zero
  // resources.
  return categoryTotal(input.assets, hhMemberIdx);
}

// Returns true if the immigration status is valid for assistance, false
// if not, and null if unknown.
// This is purposefully broad so as to not screen out immigrants with
// potentially nuanced immigration statuses.
function validImmigration(input) {
  return isOneOf(input.immigrationStatus, [
    'permanent_resident',
    'long_term',
    'none_describe',
  ]);
}

// Returns true if the immigration status is considered complex enough for a
// Program flag.
function complexImmigration(input,
    complexOptions=['long_term', 'none_describe']) {
  return (
    !input.citizen &&
    complexOptions.includes(input.immigrationStatus));
}

class MonthlyIncomeLimits {
  // If 'addlPersonExtra' is a number, that much will be added to the
  // last limit in 'limits' for each person over the last limit.  If it is
  // a function, the function should take a single parameter--the number of
  // people beyond the last limit--and return the additional income amount
  // to be added to the last limit.
  constructor(limits, addlPersonExtra) {
    this.limits = limits;
    this.addlPersonExtra = addlPersonExtra;
  }

  static fromAnnual(limits, addlPersonExtra) {
    let extra;
    if (typeof(addlPersonExtra) === 'function') {
      extra = (numExtraPeople) => addlPersonExtra(numExtraPeople) / 12;
    } else {
      extra = addlPersonExtra / 12;
    }
    return new MonthlyIncomeLimits(
      limits.map(l => l / 12), extra);
  }

  getLimit(hhSize) {
    if (hhSize < 1) {
      return 0;
    } else if (hhSize > this.limits.length) {
      let extraCalc;
      if (typeof(this.addlPersonExtra) === 'function') {
        extraCalc = this.addlPersonExtra;
      } else {
        extraCalc = (numExtraPeople) => numExtraPeople * this.addlPersonExtra;
      }
      const extra = extraCalc(hhSize - this.limits.length);
      return this.limits[this.limits.length - 1] + extra;
    } else {
      return this.limits[hhSize - 1];
    }
  }
}

// Flags that can be associated with a Program to alter the display
// of that Program's eligibility result to the user.
const FlagCodes = {
  UNKNOWN: 0,
  NEAR_INCOME_LIMIT: 1,
  TOO_COMPLEX: 2,
  COMPLEX_IMMIGRATION: 3,
  MORE_INFO_NEEDED: 4,
};

// A single eligibility condition that can be displayed to the user.  Note
// an EligCondition will often be a combination of a few conditional
// statements in order to simplify the eligibility conditions displayed.
//
// For example, we can combine aged, disabled, and blind into a single
// EligCondition for simplified display:
//
//   const condition = new EligCondition(
//     "Disabled, blind, or 65+ years old",
//     or(isDisabled, isBlind, ge(age, 65)));
function EligCondition(desc, met) {
  this.desc = desc;
  this.met = met;
}

// A program to be checked for eligibility.
// 'logic' contains the list of EligConditions used to assess eligibility.
// 'flags' is a list of FlagCodes relvant to the eligibility assessment.
function Program() {
  this.conditions = [];
  this.flags = [];

  // Adds a single EligCondition that must be met in addition to all other
  // previously added conditions.
  this.addCondition = function(condition) {
    this.conditions.push(condition);
  }

  // Adds a list of EligConditions, one of which must be met in addition to
  // all other previously added conditions.
  this.addConditionsOneOf = function(conditions) {
    this.conditions.push([].concat(conditions));
  }

  this.addFlag = function(code) {
    this.flags.push(code);
  }

  // Evaluates the entire set of conditions, returning true, false, or null.
  // True should be returned if all the conditions are met, false if they
  // are not all met, and null if it can't be determined.
  this.evaluate = function() {
    const values = [];
    for (const condition of this.conditions) {
      if (condition instanceof Array) {
        values.push(or(...condition.map(c => c.met)));
      } else {
        values.push(condition.met);
      }
    }
    return and(...values);
  }

  // Returns a result object containing the eligibility determination,
  // the list of conditions used to make that determination, and
  // any relevant flags.
  this.getResult = function() {
    const evaluation = this.evaluate();
    if (evaluation == null) {
      this.addFlag(FlagCodes.MORE_INFO_NEEDED);
    }
    return {
      'eligible': evaluation,
      'conditions': this.conditions,
      'flags': this.flags
    };
  }
}

// The functions below determine eligibility for various programs.
// When a program is added using the "program" shortcode, a matching function
// should be defined called {id}Eligible where {id} is the id given in
// the "program" shortcode for that program.
//
// An eligibility function should return an EligResult object with the
// 'eligibility' property set to true if the input values suggest
// program eligibility, false if the values suggest ineligibility, and
// null if an eligibility determination can't be made.
function adsaResult(input) {
  const isDisabled = or(
    input.disabled,
    input.blind,
    input.deaf);
  const isProgramQualified = or(
    input.existingSsiMe,
    input.existingSsdiMe,
    input.existingIhssMe,
    input.existingCapiMe,
    ssiResult(input).eligible,
    ssdiResult(input).eligible,
    ihssResult(input).eligible,
    capiResult(input).eligible);

  const program = new Program();
  program.addCondition(
    new EligCondition('Disabled, blind, or deaf', isDisabled));
  program.addCondition(
    new EligCondition('Uses a service dog', input.usesGuideDog));
  program.addCondition(
    new EligCondition('Receives or is eligible for SSI, SSDI, IHSS, or CAPI',
      isProgramQualified));
  return program.getResult();
}

function calfreshResult(input) {
  // https://stgenssa.sccgov.org/debs/policy_handbook_Charts/ch-fs.pdf
  // Section 2.1
  const fedPovertyLevel = new MonthlyIncomeLimits(
    cnst.calfresh.FED_POVERTY_LEVEL,
    cnst.calfresh.FED_POVERTY_LEVEL_ADDL_PERSON);

  const meetsImmigrationReq = or(
    input.citizen,
    validImmigration(input));

  // https://stgenssa.sccgov.org/debs/policy_handbook_calfresh/fschap11.pdf
  // TODO: Determine if _every_ household member is eligible for Calworks
  // or GA, as that is the true test of categorical eligibility.
  const isCategoricallyEligible = or(
    input.existingCalworksMe,
    input.existingCalworksHousehold,
    input.existingGaMe,
    input.existingGaHousehold,
    calworksResult(input).eligible,
    gaResult(input).eligible);

  // Note: Nearly all users will be considered "modified cagegorically
  // eligible", meaning the MCE income limit factor is used and resources
  // are not checked.
  // TODO: Handle edge cases where the user is not MCE.
  //
  // TODO: Run net income and resource checks for households containing
  // and elderly or disabled member in the event gross income is higher than
  // the MCE limit.
  // https://stgenssa.sccgov.org/debs/policy_handbook_calfresh/fschap11.pdf#page=7
  // Section 11.8.4
  //
  const mceIncomeLimit = (cnst.calfresh.GROSS_INCOME_LIMIT_MCE_FACTOR *
    fedPovertyLevel.getLimit(input.householdSize));
  const nonExemptIncome = (grossIncome(input) -
    cnst.calfresh.SELF_EMPLOYED_EXEMPT_FRACTION *
    categoryTotal(input.income.selfEmployed));
  const underIncomeLimit = le(nonExemptIncome, mceIncomeLimit);

  const program = new Program();
  program.addCondition(
    new EligCondition('U.S. citizen or qualified immigrant',
      meetsImmigrationReq));
  program.addConditionsOneOf([
    new EligCondition(
      `Adjusted income is below ${usdLimit(mceIncomeLimit)} per month`,
      underIncomeLimit),
    new EligCondition('Receives or is eligible for CalWORKS or GA',
      isCategoricallyEligible),
  ]);

  if (program.evaluate() && complexImmigration(input)) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function calworksAdjustedIncome(input) {
  const childSupportDisregards = [
    0,
    cnst.calworks.ONE_CHILD_SUPPORT_DISREGARD,
    cnst.calworks.TWO_CHILD_SUPPORT_DISREGARD];

  // This employment array includes the user (idx 0) and the user's household.
  // Self-employed counts as employed.
  // https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2020/A-D/CW29.pdf?ver=2021-11-19-150846-840
  const employed = [...Array(input.householdSize).keys()].map(
    i => totalEarnedIncome(input, i) > 0);
  const numEmployed = employed.filter(e => e).length;

  // If household ages are not given, simply don't take the disregards rather
  // than propagate null age values.
  // Note if the applicant is under 19, they do not count as a child for
  // child support income.
  const numChildren = (input.householdAges.filter(
    a => a <= cnst.calworks.MAX_CHILD_AGE).length);

  const maxEmploymentDisregard = (
    numEmployed * cnst.calworks.EMPLOYMENT_DISREGARD);
  const maxChildSupportDisregard = childSupportDisregards[
    Math.min(numChildren, childSupportDisregards.length - 1)];
  const netEarned = (categoryTotal(input.income.wages) +
      (1 - cnst.calworks.SELF_EMPLOYED_DISREGARD_FRAC) *
      categoryTotal(input.income.selfEmployed));
  const childSupportTotal = categoryTotal(input.income.childSupport);
  // https://stgenssa.sccgov.org/debs/policy_handbook_CalWORKs/afchap27.pdf
  // Section 27.1
  const ssiIncomeTotal = input.ssiIncome.reduce(add, 0);

  // TODO: remove the SSI income subtraction?
  // https://www.cdss.ca.gov/Portals/9/Additional-Resources/Forms-and-Brochures/2020/A-D/CW29.pdf?ver=2021-11-19-150846-840
  return (grossIncome(input) -
      Math.min(netEarned, maxEmploymentDisregard) -
      Math.min(childSupportTotal, maxChildSupportDisregard) -
      cnst.calworks.SELF_EMPLOYED_DISREGARD_FRAC *
      categoryTotal(input.income.selfEmployed) - ssiIncomeTotal);
}

function calworksResult(input) {
  const mbsac = new MonthlyIncomeLimits(
    cnst.calworks.MBSAC,
    cnst.calworks.MBSAC_ADDL_PERSON);

  const meetsImmigrationReq = or(
    input.citizen,
    validImmigration(input));

  const meetsFamilyReq = or(
    ...input.householdAges.map(a => le(a, cnst.calworks.MAX_CHILD_AGE)),
    // TODO: is this head of household check needed?  Could we just
    // check if _anyone_ is under 19?
    and(
      le(input.age, cnst.calworks.MAX_CHILD_AGE),
      input.headOfHousehold),
    input.pregnant,
    ...input.householdPregnant,
  );

  const nonExemptIncome = calworksAdjustedIncome(input);
  // TODO: Exclude SSI/CAPI recipients?  That might make the form too complex.
  // TODO: Add in special needs to income limit.
  const mbsacIncomeLimit = mbsac.getLimit(input.householdSize);
  const underIncomeLimit = le(nonExemptIncome, mbsacIncomeLimit);

  let resourceLimit = cnst.calworks.BASE_RESOURCE_LIMIT;
  const hasElderlyOrDisabled = or(
    ...input.householdAges.map(a => ge(a, cnst.calworks.MIN_ELDERLY_AGE)),
    ge(input.age, cnst.calworks.MIN_ELDERLY_AGE),
    ...input.householdDisabled,
    // TODO: Determine if blind or deaf is considered "disabled" here.
    input.disabled)
  // If household ages are not specified, we are ok falling back to
  // BASE_RESOURCE_LIMIT.
  if (hasElderlyOrDisabled) {
    resourceLimit = cnst.calworks.DISABLED_ELDERLY_RESOURCE_LIMIT;
  }
  const underResourceLimit = le(totalResources(input), resourceLimit);

  const program = new Program();
  program.addCondition(
    new EligCondition('U.S. citizen or qualified immigrant',
      meetsImmigrationReq));
  program.addCondition(
    new EligCondition(
      `Household has a member who is pregnant or under ${cnst.calworks.MAX_CHILD_AGE + 1}`,
      meetsFamilyReq));
  program.addCondition(
    new EligCondition(
      `Adjusted income is below ${usdLimit(mbsacIncomeLimit)} per month`,
      underIncomeLimit));
  program.addCondition(
    new EligCondition(
      `Total value of assets is below ${usdLimit(resourceLimit)}`,
      underResourceLimit));
  if (program.evaluate() && complexImmigration(input)) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function capiResult(input) {
  // https://stgenssa.sccgov.org/debs/policy_handbook_CAPI/cachap06.pdf
  // Note that we basically default to an eligible determination for all
  // immigrants that are not explicitly temporarily living in the country.
  const meetsImmigrationReq = and(
    not(input.citizen),
    // TODO: (?) Handle certain qualified aliens per Section 6.4 of
    // https://stgenssa.sccgov.org/debs/policy_handbook_CAPI/cachap06.pdf
    validImmigration(input));

  const program = ssiCapiBaseProgram(input);
  program.addCondition(new EligCondition(
    'Meets expanded immigration status <a href="https://ca.db101.org/ca/programs/income_support/capi/program2b.htm" target="_blank" rel="noopener">requirements</a>',
    meetsImmigrationReq));
  // For this program in particular, we show the complex immigration flag
  // even if we suggest eligibility, since applicants must be immigrants
  // in the first place to even be eligible.
  if (program.evaluate() &&
      complexImmigration(input, [
        'permanent_resident',
        'long_term',
        'none_describe'])) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function careIncomeLimit() {
  const grossLimit = MonthlyIncomeLimits.fromAnnual(
    cnst.care.ANNUAL_INCOME_LIMITS,
    cnst.care.ANNUAL_INCOME_LIMIT_ADDL_PERSON);

  return grossLimit;
}

function careResult(input) {
  // https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program
  const isHoused = isOneOf(input.housingSituation, [
    'housed',
    'unlisted-stable-place']);

  const incomeLimit = careIncomeLimit().getLimit(input.householdSize);
  const underIncomeLimit = le(grossIncome(input), incomeLimit);

  const isCategoricallyEligible = or(
    // TODO: add remaining assistance programs that help qualify:
    //   Healthy Families A & B
    //   Tribal programs?
    input.existingSsiMe,
    input.existingSsiHousehold,
    input.existingLiheapMe,
    input.existingLiheapHousehold,
    input.existingWicMe,
    input.existingWicHousehold,
    input.existingCalworksMe,
    input.existingCalworksHousehold,
    input.existingCalfreshMe,
    input.existingCalfreshHousehold,
    input.existingMedicalMe,
    input.existingMedicalHousehold,
    // TODO: Does CFAP count here?
    input.existingCfapMe,
    input.existingCfapHousehold,
    input.existingNslpMe,
    input.existingNslpHousehold,
    // TODO: Add Medi-Cal eligibility check here once supported.
    ssiResult(input).eligible,
    liheapResult(input).eligible,
    wicResult(input).eligible,
    calworksResult(input).eligible,
    calfreshResult(input).eligible);

  const program = new Program();
  program.addCondition(
    new EligCondition('Is housed', isHoused));
  program.addCondition(
    new EligCondition('Pays utilities', input.paysUtilities));
  program.addConditionsOneOf([
    new EligCondition(`Gross income is below ${usdLimit(incomeLimit)} per month`,
      underIncomeLimit),
    new EligCondition('Receives or is eligible for SSI, LIHEAP, WIC, CalWORKS, CalFresh, Medi-Cal, CFAP or NSLP',
      isCategoricallyEligible),
  ]);

  return program.getResult();
}

function feraResult(input) {
  const grossLimit = MonthlyIncomeLimits.fromAnnual(
    cnst.fera.ANNUAL_INCOME_LIMITS,
    cnst.fera.ANNUAL_INCOME_LIMIT_ADDL_PERSON);

  const isHoused = isOneOf(input.housingSituation, [
    'housed',
    'unlisted-stable-place']);

  const incomeLimitCare = careIncomeLimit().getLimit(input.householdSize);
  const overCareIncomeLimit = gt(grossIncome(input), incomeLimitCare);
  const incomeLimitFera = grossLimit.getLimit(input.householdSize);
  const underFeraIncomeLimit = le(grossIncome(input), incomeLimitFera);

  const meetsHouseholdSizeReq = ge(input.householdSize,
    cnst.fera.MIN_HOUSEHOLD_SIZE);

  const program = new Program();
  program.addCondition(
    new EligCondition('Is housed', isHoused));
  program.addCondition(
    new EligCondition('Pays utilities', input.paysUtilities));
  program.addCondition(
    new EligCondition(`Gross income exceeds CARE program limit of ${usdLimit(incomeLimitCare)} per month`,
      overCareIncomeLimit));
  program.addCondition(
    new EligCondition(`Gross income is under FERA program limit of ${usdLimit(incomeLimitFera)} per month`,
      underFeraIncomeLimit));
  program.addCondition(
    new EligCondition(`Household has at least ${cnst.fera.MIN_HOUSEHOLD_SIZE} people`,
      meetsHouseholdSizeReq));

  return program.getResult();
}

function vaDisabilityResult(input) {
  // https://www.va.gov/disability/eligibility/
  const meetsDutyReq = or(
    ...input.dutyPeriods.map(d => eq(d.type, 'active-duty')),
    ...input.dutyPeriods.map(d => eq(d.type, 'active-training')),
    ...input.dutyPeriods.map(d => eq(d.type, 'inactive-training')));

  const meetsDischargeReq = not(isOneOf(input.dischargeStatus, [
    'dishonorable',
    'oth',
    'bad-conduct',
  ]));

  const isServiceDisabled = and(
    input.disabled,
    input.militaryDisabled);

  const program = new Program();
  program.addCondition(new EligCondition('U.S. veteran', input.veteran));
  program.addCondition(
    new EligCondition('Has a disability related to military service',
      isServiceDisabled));
  program.addCondition(
    new EligCondition(
      'Served on active duty, active duty for training, or inactive duty training',
      meetsDutyReq));
  program.addCondition(
    new EligCondition('Discharge status that is not dishonorable, bad conduct, or other-than-honorable',
      meetsDischargeReq));
  return program.getResult();
}

// GA-specific references:
//   https://socialservices.sccgov.org/about-us/department-employment-and-benefit-services/regulation-and-policy-handbooks/general-assistance
//   https://stgenssa.sccgov.org/debs/policy_handbook_Charts/ch-ga.pdf
//
// TO DO:
//   https://stgenssa.sccgov.org/debs/policy_handbook_GA/gachap07.pdf (7. Citizens/Noncitizens)
//     Qualified non-citizen: Need to determine all non-citizen groups which fit this category. May or may not need to add more detail to immigration status form page.
//
//   https://stgenssa.sccgov.org/debs/policy_handbook_GA/gachap05.pdf (Section 5.1)
//     Maximum age can be over 64 years with some conditions. May or may not need to implement this.
function gaResult(input) {
  const grossLimit = new MonthlyIncomeLimits(
    cnst.ga.MONTHLY_INCOME_LIMITS,
    cnst.ga.MONTHLY_INCOME_LIMIT_ADDL_PERSON);

  const meetsAgeReq = ge(input.age, cnst.ga.MIN_ELIGIBLE_AGE);

  const numDependents = input.householdDependents.filter(d => d).length;
  const hasNoDependents = eq(numDependents, cnst.ga.NUM_OF_DEPENDENTS);

  const underResourceLimit = le(totalResources(input), cnst.ga.MAX_RESOURCES);
  const incomeLimit = grossLimit.getLimit(input.householdSize);
  const underIncomeLimit = le(grossIncome(input), incomeLimit);

  const meetsImmigrationReq = or(
    input.citizen,
    validImmigration(input));

  const program = new Program();
  program.addCondition(
    new EligCondition(`Age ${cnst.ga.MIN_ELIGIBLE_AGE} or older`, meetsAgeReq));
  program.addCondition(
    new EligCondition(`Has ${cnst.ga.NUM_OF_DEPENDENTS} dependent children`, hasNoDependents));
  program.addCondition(
    new EligCondition(`Total value of assets is below ${usdLimit(cnst.ga.MAX_RESOURCES)}`, underResourceLimit));
  program.addCondition(
    new EligCondition(`Gross income is below ${usdLimit(incomeLimit)} per month`, underIncomeLimit));
  program.addCondition(
    new EligCondition('U.S. citizen or qualified immigrant', meetsImmigrationReq));
  if (program.evaluate() && complexImmigration(input)) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function noFeeIdResult(input) {
  const isUnhoused = isOneOf(input.housingSituation, [
      'vehicle',
      'transitional',
      'hotel',
      'shelter',
      'no-stable-place']);
  const meetsAgeReq = ge(input.age, cnst.noFeeId.MIN_ELIGIBLE_AGE);

  const program = new Program();
  program.addConditionsOneOf([
    new EligCondition('Experiencing homelessness', isUnhoused),
    new EligCondition(`Age ${cnst.noFeeId.MIN_ELIGIBLE_AGE} or older`, meetsAgeReq)
  ]);
  return program.getResult();
}

function reducedFeeIdResult(input) {
  // https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/identification-id-cards/
  // https://www.icarol.info/ResourceView2.aspx?org=2225&agencynum=73919505
  //
  // DL 937 order form:
  // https://www.dmv.ca.gov/portal/file/order-request-reduced-fee-or-no-fee-identification-card-program-dl-932-pdf/
  const isProgramQualified = or(
    input.existingCalworksMe,
    input.existingSsiMe,
    input.existingGaMe,
    input.existingCalfreshMe,
    input.existingCfapMe,
    input.existingCapiMe,
    calworksResult(input).eligible,
    ssiResult(input).eligible,
    gaResult(input).eligible,
    calfreshResult(input).eligible,
    capiResult(input).eligible);
  const ineligibleForNoFeeId = not(noFeeIdResult(input).eligible);

  const program = new Program();
  program.addCondition(new EligCondition(
    'Receives or is eligible for CalWORKS, SSI, GA, CalFresh, CFAP, or CAPI',
    isProgramQualified));
  program.addCondition(new EligCondition(
    'Not eligible for a cheaper no-fee ID card', ineligibleForNoFeeId));
  return program.getResult();
}

function ihssResult(input) {
  const meetsDisabilityReq = or(
    ge(input.age, cnst.ihss.MIN_ELDERLY_AGE),
    input.blind,
    input.disabled);

  const meetsHousedReq = isOneOf(input.housingSituation, [
    'housed',
    'unlisted-stable-place']);

  const program = new Program();
  program.addCondition(
    new EligCondition(`Disabled, blind or age ${cnst.ihss.MIN_ELDERLY_AGE} or older`, meetsDisabilityReq));
  program.addCondition(
    new EligCondition('Is housed', meetsHousedReq));
  // TODO: Add medicalResult(input).eligible once we can screen for Medi-Cal.
  program.addCondition(
    new EligCondition('Receives Medi-Cal', input.existingMedicalMe));

  return program.getResult();
}

function lifelineResult(input) {
  const grossLimit = MonthlyIncomeLimits.fromAnnual(
    cnst.lifeline.ANNUAL_INCOME_LIMITS,
    cnst.lifeline.ANNUAL_INCOME_LIMIT_ADDL_PERSON);

  const incomeLimit = grossLimit.getLimit(input.householdSize);
  const underIncomeLimit = le(grossIncome(input), incomeLimit);

  const isProgramQualified = or(
    input.existingMedicalMe,
    input.existingMedicalHousehold,
    input.existingLiheapMe,
    input.existingLiheapHousehold,
    input.existingSsiMe,
    input.existingSsiHousehold,
    // TODO: add Section 8.
    // TODO: add CFAP?
    input.existingCalfreshMe,
    input.existingCalfreshHousehold,
    input.existingWicMe,
    input.existingWicHousehold,
    input.existingNslpMe,
    input.existingNslpHousehold,
    input.existingCalworksMe,
    input.existingCalworksHousehold,
    input.existingVaPensionMe,
    input.existingVaPensionHousehold,
    liheapResult(input).eligible,
    ssiResult(input).eligible,
    calfreshResult(input).eligible,
    wicResult(input).eligible,
    calworksResult(input).eligible,
    vaPensionResult(input).eligible);

  const program = new Program();
  program.addConditionsOneOf([
    new EligCondition(`Gross income is below ${usdLimit(incomeLimit)} per month`,
      underIncomeLimit),
    new EligCondition('Receives or is eligible for SSI, LIHEAP, WIC, CalWORKS, CalFresh, Medi-Cal, NSLP or VA Pension',
      isProgramQualified),
  ]);

  return program.getResult();
}

function liheapResult(input) {
  const grossLimit = new MonthlyIncomeLimits(
    cnst.liheap.MONTHLY_INCOME_LIMITS,
    cnst.liheap.MONTHLY_INCOME_LIMIT_ADDL_PERSON);

  const meetsHousedReq = isOneOf(input.housingSituation, [
    'housed',
    'unlisted-stable-place']);
									
  const incomeLimit = grossLimit.getLimit(input.householdSize);
  const underIncomeLimit = le(grossIncome(input), incomeLimit);

  const program = new Program();
  program.addCondition(
    new EligCondition('Is housed', meetsHousedReq));
  program.addCondition(
    new EligCondition(`Gross income is below ${usdLimit(incomeLimit)} per month`, underIncomeLimit));

  return program.getResult();
}

function vtaParatransitResult(input) {
  const program = new Program();
  // TODO: Determine if blindness should be included here.
  program.addCondition(
    new EligCondition('Disabled', input.disabled));

  return program.getResult();
}

function housingChoiceResult(input) {
  // https://www.huduser.gov/portal/datasets/il/il2022/2022IlCalc.odn?inputname=Santa+Clara+County&area_id=METRO41940M41940&fips=0608599999&type=county&year=2022&yy=22&stname=California&stusps=CA&statefp=06&ACS_Survey=%24ACS_Survey%24&State_Count=%24State_Count%24&areaname=San+Jose-Sunnyvale-Santa+Clara%2C+CA+HUD+Metro+FMR+Area&incpath=%24incpath%24&level=50
  const extraCalc = function(numExtraPeople) {
    const limits = cnst.housingChoice.ANNUAL_INCOME_LIMITS;
    const baseLimit = limits[cnst.housingChoice.BASE_HOUSEHOLD_SIZE - 1];
    const adjustment = (cnst.housingChoice.FAMILY_SIZE_ADJ_8 +
      cnst.housingChoice.INCREMENTAL_ADJ * numExtraPeople);
    const incomeLimit = baseLimit * adjustment;
    const rounded = (cnst.housingChoice.INCOME_ROUND_UP_TO_NEAREST * Math.ceil(
      Math.trunc(incomeLimit) / cnst.housingChoice.INCOME_ROUND_UP_TO_NEAREST));
    // Return incremental change ("extra") from the max listed input value.
    return rounded - limits[limits.length - 1];
  }

  const grossLimit = MonthlyIncomeLimits.fromAnnual(
    cnst.housingChoice.ANNUAL_INCOME_LIMITS,
    extraCalc);

  // TODO: Collect data about whether _anyone_ in the household is
  // a citizen or qualified nonresident.
  // https://www.ecfr.gov/current/title-24/subtitle-A/part-5/subpart-E/section-5.516#p-5.516(b)
  const meetsImmigrationReq = or(
    input.citizen,
    validImmigration(input));
  const incomeLimit = grossLimit.getLimit(input.householdSize);
  const underIncomeLimit = le(grossIncome(input), incomeLimit);
  const meetsAgeReq = ge(input.age, cnst.housingChoice.MIN_ELIGIBLE_AGE);

  const program = new Program();
  program.addCondition(
    new EligCondition('U.S. citizen or qualified immigrant',
      meetsImmigrationReq));
  program.addCondition(
    new EligCondition(`Age ${cnst.housingChoice.MIN_ELIGIBLE_AGE} or older`, meetsAgeReq));
  program.addCondition(
    new EligCondition(
      `Gross income is below ${usdLimit(incomeLimit)} per month`,
      underIncomeLimit));
  if (program.evaluate() && complexImmigration(input)) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function ssiCapiAdjustedIncome(earnedIncome, unearnedIncome) {
  // See https://www.ssa.gov/oact/cola/incomexcluded.html for calculation.
  const unearnedExclusion = Math.min(unearnedIncome,
    cnst.ssiCapi.MAX_UNEARNED_INCOME_EXCLUSION);
  const countableEarnedIncome = Math.max(0, cnst.ssiCapi.EARNED_INCOME_EXCLUSION_FACTOR * (
    earnedIncome -
    cnst.ssiCapi.MAX_EARNED_INCOME_EXCLUSION -
    (cnst.ssiCapi.MAX_UNEARNED_INCOME_EXCLUSION - unearnedExclusion)));
  const countableUnearnedIncome = unearnedIncome - unearnedExclusion;
  return countableEarnedIncome + countableUnearnedIncome;
}

function ssiCapiBaseProgram(input) {
  // Note we are not checking if the user's disability is preventing them
  // from working, as that decision can be complex to make--better to just
  // assume they have trouble working to avoid screening someone out
  // erroneously.
  const meetsDisabilityReq = or(
    input.disabled,
    input.blind,
    ge(input.age, cnst.ssiCapi.MIN_ELDERLY_AGE));

  const sgaLimit = input.blind ? cnst.ssiCapi.SGA_BLIND : cnst.ssiCapi.SGA_NON_BLIND;
  let maxBenefit = cnst.ssiCapi.MAX_BENEFIT_NON_BLIND;
  if (input.blind) {
    maxBenefit = cnst.ssiCapi.MAX_BENEFIT_BLIND;
  } else if (not(input.hasKitchen)) {
    // TODO: Update the form to always show the kitchen question regardless
    // of housing situation.
    maxBenefit = cnst.ssiCapi.MAX_BENEFIT_NON_BLIND_NO_KITCHEN;
  }
  // Note income and resources for only the user (applicant) are counted.
  // TODO: Apply deeming.
  const earnedIncome = totalEarnedIncome(input, 0);
  const unearnedIncome = totalUnearnedIncome(input, 0);
  const countableIncome = ssiCapiAdjustedIncome(earnedIncome, unearnedIncome);

  const noSubstantialGainfulActivity = le(earnedIncome, sgaLimit);
  const underIncomeLimit = lt(countableIncome, maxBenefit);
  const underResourceLimit = lt(
    totalResources(input, 0), cnst.ssiCapi.MAX_RESOURCES);

  const program = new Program();
  program.addCondition(new EligCondition(
    `Disabled, blind or age ${cnst.ssiCapi.MIN_ELDERLY_AGE} or older`,
    meetsDisabilityReq));
  // Substantial gainful activity test is only applied to disabled or blind
  // applicants.
  // https://www.ssa.gov/ssi/text-disable-ussi.htm
  if (or(input.disabled, input.blind)) {
    program.addCondition(new EligCondition(
      `Income from employment is below ${usdLimit(sgaLimit)} per month`,
      noSubstantialGainfulActivity));
  }
  program.addCondition(new EligCondition(
    `Total adjusted income is below ${usdLimit(maxBenefit)} per month`,
    underIncomeLimit));
  program.addCondition(new EligCondition(
    `Total value of assets is below ${usdLimit(cnst.ssiCapi.MAX_RESOURCES)}`,
    underResourceLimit));

  return program;
}

function ssiResult(input) {
  const meetsImmigrationReq = or(
    input.citizen,
    validImmigration(input));

  const program = ssiCapiBaseProgram(input);
  program.addCondition(new EligCondition(
    'U.S. citizen or qualified immigrant',
    meetsImmigrationReq));
  if (program.evaluate() && complexImmigration(input)) {
    program.addFlag(FlagCodes.COMPLEX_IMMIGRATION);
  }
  return program.getResult();
}

function ssdiResult(input) {
  // TODO
  const program = new Program();
  // TODO: Replace this single example condition with a set of simplified
  // conditions describing the separate eligibility requirements.
  program.addCondition(new EligCondition('Example', false));

  return program.getResult();
}

// Returns a list of indices that can be used to extract income and assets for
// a spouse, or an empty list if no spouse exists.
function spouseIndices(input) {
  // Add offset of 1 for user (index 0).
  return indexOfAll(input.householdSpouse, true).map(i => i + 1);
}

// Returns a list of indices that can be used to extract income and assets for
// any dependents, or an empty list if no dependents exist.
function dependentIndices(input) {
  // Add offset of 1 for user (index 0).
  return indexOfAll(input.householdDependents, true).map(i => i + 1);
}

// Computes the countable income for VA Pension eligiblility.
function vaPensionCountableIncome(input) {
  // Annual income includes the claimant, the spouse, and dependents, though
  // much of a child's income can be excluded
  // https://www.ecfr.gov/current/title-38/chapter-I/part-3#p-3.272(j)
  // https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFRf5fe31f49d4f511/section-3.23#p-3.23(d)(4)
  const dependentIdxs = dependentIndices(input);
  // Use a Set to remove any duplicate indices.
  const incomeIdxs = [...new Set([0, ...(spouseIndices(input)), ...dependentIdxs])];
  // https://www.va.gov/pension/veterans-pension-rates/
  let countableIncome = grossIncome(input, incomeIdxs);
  // Exclude the wages from each dependent child (up to a maximum).
  for (const dependentIdx of dependentIdxs) {
    countableIncome -= Math.min(
      totalEarnedIncome(input, dependentIdx),
      cnst.vaPension.MAX_DEPENDENT_ANNUAL_WAGES_EXCLUSION / 12);
  }
  return countableIncome;
}

// Computes the net worth for VA Pension eligibility.
function vaPensionNetWorth(input, countableIncome) {
  // Assets include the claimant and the spouse.
  // https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR093085c1bf84bc2/section-3.274#p-3.274(c)(1)
  const assetIdxs = [0].concat(spouseIndices(input));
  // Note income is converted to an annual amount here.
  return 12 * countableIncome + totalResources(input, assetIdxs);
}

// Computes the household size for use with the VA Pension income limit.
function vaPensionHouseholdSize(input) {
  const spouseAndDependents = new Set([
    ...spouseIndices(input),
    ...dependentIndices(input),
  ]);
  // Include the user, so add 1 to the number of other household members.
  return 1 + spouseAndDependents.size;
}

function vaPensionResult(input) {
  const mapr = MonthlyIncomeLimits.fromAnnual(
    cnst.vaPension.ANNUAL_INCOME_LIMITS,
    cnst.vaPension.ANNUAL_INCOME_LIMIT_ADDL_DEPENDENT);

  const wartimes = cnst.vaPension.WARTIMES.map(
    p => ({start: dateOrToday(p[0]), end: dateOrToday(p[1])}));

  const meetsDischargeReq = not(isOneOf(input.dischargeStatus, [
    'dishonorable',
    'oth',
    'bad-conduct',
  ]));

  const meetsAgeReq = ge(input.age, cnst.vaPension.MIN_ELDERLY_AGE);

  const isProgramQualified = or(
    input.existingSsiMe,
    input.existingSsdiMe,
    ssiResult(input).eligible,
    ssdiResult(input).eligible);

  const meetsServiceReq = [];
  for (const duty of input.dutyPeriods) {
    const duration = getNumberOfDays(duty.start, duty.end);
    const isDuringWartime = withinInterval(duty.start, duty.end, wartimes);
    // https://www.va.gov/pension/eligibility/
    // The service requirements have been simplified here to ignore officer vs
    // enlisted.  This should err on the side of eligibility while avoiding
    // complex legal distinctions and minutae.
    // Despite language to the contrary on the va.gov eligibility webpage,
    // it seems that pension is available *only* to wartime veterans.
    meetsServiceReq.push(
      and(
        isDuringWartime,
        eq(duty.type, 'active-duty'),
        or(
          and(
            lt(duty.start, new Date(dateStrToLocal(cnst.vaPension.EARLY_DUTY_BEFORE))),
            ge(duration, cnst.vaPension.MIN_EARLY_DUTY_DURATION)),
          and(
            gt(duty.start, new Date(dateStrToLocal(cnst.vaPension.LATE_DUTY_AFTER))),
            or(
              ge(duration, cnst.vaPension.MIN_LATE_DUTY_DURATION),
              input.servedFullDuration)))));
  }

  // https://www.va.gov/pension/veterans-pension-rates/
  // Note alternate household size definition.
  householdSize = vaPensionHouseholdSize(input);
  const maxPayment = mapr.getLimit(householdSize);
  const countableIncome = vaPensionCountableIncome(input);
  const underNetWorthLimit = le(
    vaPensionNetWorth(input, countableIncome),
    cnst.vaPension.ANNUAL_NET_WORTH_LIMIT);
  const underMaprLimit = le(countableIncome, maxPayment);

  const meetsAnyServiceReq = or(...meetsServiceReq);

  const program = new Program();
  program.addCondition(new EligCondition('U.S. veteran', input.veteran));
  program.addCondition(
    new EligCondition('Discharged honorably or under honorable conditions',
      meetsDischargeReq));
  program.addCondition(new EligCondition('Meets specific duty type and duration <a href="https://www.va.gov/pension/eligibility/" target="_blank" rel="noopener">requirements</a>',
    meetsAnyServiceReq));
  program.addCondition(new EligCondition(`Adjusted income is below ${usdLimit(maxPayment)} per month`, underMaprLimit));
  program.addCondition(new EligCondition(`Adjusted yearly income and assets combined are below ${usdLimit(cnst.vaPension.ANNUAL_NET_WORTH_LIMIT)}`, underNetWorthLimit));
  program.addConditionsOneOf([
    new EligCondition('Disabled', input.disabled),
    new EligCondition(`Age ${cnst.vaPension.MIN_ELDERLY_AGE} or older`, meetsAgeReq),
    new EligCondition('Receives or is eligible for SSI or SSDI', isProgramQualified)
  ]);
  return program.getResult();
}

function wicResult(input) {
  const grossLimit = new MonthlyIncomeLimits(
    cnst.wic.MONTHLY_INCOME_LIMITS,
    cnst.wic.MONTHLY_INCOME_LIMIT_ADDL_PERSON);

  // https://www.cdph.ca.gov/Programs/CFH/DWICSN/Pages/HowCanIGetWIC.aspx
  const hasPregnant = or(
    input.pregnant,
    ...input.householdPregnant);
  const hasBreastfeeding = or(
    input.feeding,
    ...input.householdFeeding);
  const hasChild = or(...input.householdAges.map(a => lt(a, cnst.wic.CHILD_EXIT_AGE)));

  // Rather than null, if unborn-children is left empty, numUnborn == 0.
  const numUnborn = Number(input.unbornChildren);
  const incomeLimit = grossLimit.getLimit(input.householdSize + numUnborn);
  const meetsIncomeReq = le(grossIncome(input), incomeLimit);
  const isProgramQualified = or(
    // https://www.cdph.ca.gov/Programs/CFH/DWICSN/Pages/HowCanIGetWIC.aspx
    input.existingMedicalMe,
    input.existingMedicalHousehold,
    input.existingCalworksMe,
    input.existingCalworksHousehold,
    input.existingCalfreshMe,
    input.existingCalfreshHousehold,
    calfreshResult(input).eligible,
    calworksResult(input).eligible);

  const program = new Program();
  program.addConditionsOneOf([
    new EligCondition(
      `Gross income is below ${usdLimit(incomeLimit)} per month`,
      meetsIncomeReq),
    new EligCondition(
      'Receives or is eligibile for Medi-Cal, CalWORKS, or CalFresh',
      isProgramQualified)]);
  program.addConditionsOneOf([
    new EligCondition(
      'Household includes a pregnant or recently pregnant person',
      hasPregnant),
    new EligCondition(
      'Household includes a person breastfeeding an infant under 1 year old',
      hasBreastfeeding),
    new EligCondition(
      `Household includes a child under the age of ${cnst.wic.CHILD_EXIT_AGE}`,
      hasChild)]);
  return program.getResult();
}

function upliftResult(input) {
  const isUnhoused = isOneOf(input.housingSituation, [
    'vehicle',
    'transitional',
    'hotel',
    'shelter',
    'no-stable-place']);

  const program = new Program();
  program.addConditionsOneOf([
    new EligCondition('Experiencing homelessness', isUnhoused),
    new EligCondition(`At risk of losing housing`, input.homelessRisk)
  ]);
  return program.getResult();
}

function clearUnusedPages() {
  const pages = [...document.querySelectorAll('div.elig_page')];
  // Reset usage tracking.
  for (const page of pages) {
    page.used = false;
  }
  // Walk the form to find out which pages are used.
  let page = pages[0];
  do {
    page.used = true;
    page = page.next();
  } while (page);
  // Clear out those pages that are not used with the current form inputs.
  for (const unusedPage of pages.filter(p => !p.used)) {
    clearInputs(unusedPage);
  }
}

// Creates a single object from all the form inputs that can be passed
// to the various program eligibility logic functions.
function buildInputObj() {
  // Helper function to get income or asset value lists.
  function getIncomeValues(page) {
    const allValues = []
    const groups = page.querySelectorAll(
      '.income_details_wrapper > fieldset');
    for (const group of groups) {
      const values = Array.from(group.querySelectorAll('input[type=number]'),
        i => Number(i.value));
      allValues.push(values);
    }
    return allValues;
  }

  let inputData = {
    age: getValueOrNull('age'),
    citizen: not(getValueOrNull('not-citizen')),
    disabled: getValueOrNull('disabled'),
    blind: getValueOrNull('blind'),
    deaf: getValueOrNull('deaf'),
    veteran: getValueOrNull('veteran'),
    pregnant: getValueOrNull('pregnant'),
    feeding: getValueOrNull('feeding'),
    headOfHousehold: getValueOrNull('headhh_yes'),
    // TODO: Perhaps make a list of household member objects.
    householdAges: getValuesOrNulls('hh-member-age'),
    householdDisabled: getValuesOrNulls('hh-member-disabled'),
    householdPregnant: getValuesOrNulls('hh-member-pregnant'),
    householdFeeding: getValuesOrNulls('hh-member-breastfeeding'),
    householdSpouse: getValuesOrNulls('hh-member-spouse'),
    householdDependents: getValuesOrNulls('hh-member-dependent'),
    householdSize: document.querySelectorAll(
      "#page-household-members ul.dynamic_field_list>li").length,
    unbornChildren: getValueOrNull('unborn-children'),
    housingSituation: getValueOrNull('housing-situation'),
    // TODO: perhaps have the utilities check be null if unanswered instead of
    // defaulting to "no".
    paysUtilities: getValueOrNull('pay-utilities-yes'),
    hasKitchen: getValueOrNull('has-kitchen-yes'),
    homelessRisk: getValueOrNull('risk_homeless_yes'),
    immigrationStatus: getValueOrNull('immig_status'),
    usesGuideDog: getValueOrNull('dis_guide_yes'),
    militaryDisabled: getValueOrNull('dis_military_yes'),
    dischargeStatus: getValueOrNull('your-discharge-status'),
    servedFullDuration: getValueOrNull('full-dur-yes'),
    dutyPeriods: [],
    income: {},
    assets: getIncomeValues(document.getElementById('page-income-assets')),
  };

  // Existing assistance checkboxes
  const extAssistancePage = document.getElementById('page-existing-assistance');
  const extAssistanceInputs = extAssistancePage.querySelectorAll('input');
  for (const inputElem of extAssistanceInputs) {
    // TODO: Rename to userGetsSsi or householdGetsSsi (for example).
    inputData[toCamelCase(inputElem.id)] = getValueOrNull(inputElem.id);
  }

  // Income inputs
  let householdTotal = 0;
  const incomePagePrefix = 'page-income-details-';
  const incomePages = document.querySelectorAll(`[id^="${incomePagePrefix}"]`);
  for (const incomePage of incomePages) {
    const category = toCamelCase(incomePage.id.replace(incomePagePrefix, ''));
    const values = getIncomeValues(incomePage);
    inputData.income[category] = values;
    householdTotal += categoryTotal(values);
  }
  // Income is invalid only if no income of any kind for any household member
  // was entered (and the household was not marked as having zero income).
  inputData.income.valid = (householdTotal > 0
    || getValueOrNull('income-has-none'));

  // Income specifically from SSI
  const retirementEntries = [...document.querySelectorAll(
    "#page-income-details-disability ul.dynamic_field_list>li")];
  const ssiEntries = retirementEntries.filter(
    e => e.querySelector(
      'input[id^="income-disability-is-ssi-capi"]').checked);
  inputData.ssiIncome = ssiEntries.map(
    e => Number(e.querySelector("input[type=number]").value));

  // Military duty periods
  const dutyPeriodItems = document.querySelectorAll(
    '#page-veteran-details ul.dynamic_field_list>li');
  for (const item of dutyPeriodItems) {
    inputData.dutyPeriods.push({
      type: getValueOrNull(
        item.querySelector('select[id^="your-duty-type"]').id),
      start: getDateOrNan(
        item.querySelector('input[id^="served-from"]').id),
      end: getDateOrNan(
        item.querySelector('input[id^="served-until"]').id),
    });
  }

  return inputData;
}

// Determines eligibility for programs based on user form input values.
function computeEligibility() {
  // Ensure any inputs on unused pages are cleared out prior to eligibility
  // computation.
  clearUnusedPages();

  const input = buildInputObj();
  const allPrograms = document.querySelectorAll('.programs > ul > li');
  const eligibleList = document.querySelector('.programs__eligible > ul');
  const ineligibleList = document.querySelector('.programs__ineligible > ul');
  const unknownList = document.querySelector('.programs__unknown > ul');
  for (const program of allPrograms) {
    const result = window[program.dataset.eligibility](input);
    const conditionList = program.querySelector('.elig_conditions');
    const flagList = program.querySelector('.elig_flags');
    // Reset the program's displayed conditions and flags.
    while (conditionList.firstChild) {
      conditionList.removeChild(conditionList.firstChild);
    }
    while (flagList.firstChild) {
      flagList.removeChild(flagList.firstChild);
    }
    // Render each program's conditions.
    for (const condition of result.conditions) {
      const listItem = document.createElement('li');
      if (condition instanceof Array) {
        // For nested lists of conditions, first create a
        // HTML list item to act as a heading for the grouping.
        const combinedMet = or(...condition.map(c => c.met));
        listItem.textContent = 'One of:';
        addConditionIcon(listItem, combinedMet);
        conditionList.appendChild(listItem);
        // Then, create a list to sit under that heading.
        const subList = document.createElement('ul');
        for (const conditionPart of condition) {
          const subListItem = document.createElement('li');
          subListItem.innerHTML = conditionPart.desc;
          // If the combined group is met, we only notate the components
          // that contribute to the overall group being met. This will avoid
          // showing a potentially confusing unmet "X" within a group that's
          // met (because the group is OR'd together). If the combined
          // group is not met, we show everything.
          addConditionIcon(subListItem, conditionPart.met,
            {displayUnmet: !combinedMet, displayUnk: !combinedMet});
          subList.appendChild(subListItem);
        }
        conditionList.appendChild(subList);
      } else {
        listItem.innerHTML = condition.desc;
        addConditionIcon(listItem, condition.met);
        conditionList.appendChild(listItem);
      }
    }
    // Render each program's flags.
    for (const flag of result.flags) {
      let flagMsg = '';
      switch (flag) {
      case FlagCodes.MORE_INFO_NEEDED:
        flagMsg = 'We need more information from you to make an eligibility ' +
        'recommendation. ' +
        '<button type="button" class="link back_to_form" data-section-id="section-yourself">' +
        'Go back to the form</button>';
        break;
      case FlagCodes.COMPLEX_IMMIGRATION:
        flagMsg = 'The immigrant eligibility rules for this program are ' +
            'complex, and not all immigrants are eligible.';
        break;
      }
      if (flagMsg) {
        const flagItem = document.createElement('li');
        flagItem.classList.add('note');
        flagItem.innerHTML = flagMsg;
        flagList.appendChild(flagItem);
      }
    }
    const revisitButtons = document.querySelectorAll('button.back_to_form');
    for (const button of revisitButtons) {
      button.addEventListener('click', toSection);
    }
    if (result.eligible === null) {
      unknownList.appendChild(program);
    } else if (result.eligible) {
      eligibleList.appendChild(program);
    } else {
      ineligibleList.appendChild(program);
    }
  }

  for (const container of document.querySelectorAll('.programs')) {
    const list = container.querySelector('ul');
    const resultsMsgs = container.querySelectorAll('.has_results');
    const noResultsMsgs = container.querySelectorAll('.no_results');

    // Show/hide info text depending on whether there are items in the list.
    for (const resultMsg of resultsMsgs) {
      if (list.children.length) {
        resultMsg.classList.remove('hidden');
      } else {
        resultMsg.classList.add('hidden');
      }
    }
    for (const noResultMsg of noResultsMsgs) {
      if (list.children.length) {
        noResultMsg.classList.add('hidden');
      } else {
        noResultMsg.classList.remove('hidden');
      }
    }

    // Sort list items alphabetically.
    const items = [...list.children];
    items.sort((a, b) => {
      const titleA = a.querySelector('h4').textContent;
      const titleB = b.querySelector('h4').textContent;
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    for (const item of items) {
      list.appendChild(item);
    }
  }
}

// Script entry point.
function init() {
  linkPages();
  initUi();
  addListeners();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cnst,
    FlagCodes,
    hasNulls,
    add,
    or,
    and,
    not,
    eq,
    ne,
    lt,
    le,
    gt,
    ge,
    toCamelCase,
    usdLimit,
    dateStrToLocal,
    getNumberOfDays,
    formatUsDate,
    dateOrToday,
    withinInterval,
    indexOfAll,
    isOneOf,
    categoryTotal,
    totalEarnedIncome,
    totalUnearnedIncome,
    grossIncome,
    totalResources,
    MonthlyIncomeLimits,
    adsaResult,
    calfreshResult,
    calworksAdjustedIncome,
    calworksResult,
    capiResult,
    careResult,
    feraResult,
    gaResult,
    housingChoiceResult,
    ihssResult,
    lifelineResult,
    liheapResult,
    noFeeIdResult,
    ssiCapiAdjustedIncome,
    ssiResult,
    ssdiResult,
    upliftResult,
    vaDisabilityResult,
    vaPensionCountableIncome,
    vaPensionHouseholdSize,
    vaPensionNetWorth,
    vaPensionResult,
    vtaParatransitResult,
    wicResult,
  };
}
