/**
 * @jest-environment @stryker-mutator/jest-runner/jest-env/jsdom
 */

const elig = require('../eligibility');

beforeEach(() => {
  document.body.innerHTML = '';
});

test('Elements can be hidden or shown via class', () => {
  document.body.innerHTML = '<div id="testdiv" class="example"></div>';
  const elem = document.getElementById('testdiv');
  elig.setElementVisible(elem, false);
  expect(elem.className).toContain('hidden');
  elig.setElementVisible(elem, true);
  expect(elem.className).not.toContain('hidden');
  expect(() => elig.setElementVisible(document.getElementById('bogus')))
    .not.toThrow();
});

describe('modifyIds', () => {
  test('Modifies descendant elements with an id', () => {
    document.body.innerHTML = `
      <span id="parent">
        <div id="child-div"><span id="grandchild-span"></span></div>
        <input type="text" id="child-input">
      </span>`;
    const parent = document.getElementById('parent');
    elig.modifyIds(parent, '-v2');
    expect(parent.querySelector('div').id).toBe('child-div-v2');
    expect(parent.querySelector('span').id).toBe('grandchild-span-v2');
    expect(parent.querySelector('input').id).toBe('child-input-v2');
  });

  test('Does not modify elements with no id', () => {
    document.body.innerHTML = `
      <span id="parent">
        <p>Hello world</p>
      </span>`;
    const parent = document.getElementById('parent');
    elig.modifyIds(parent, '-v2');
    expect(parent.querySelector('p').id).toBe('');
  });

  test('Updates label elements to match modified inputs', () => {
    document.body.innerHTML = `
      <span id="parent">
        <input type="text" id="child">
        <label for="child">Label</label>
      </span>`;
    const parent = document.getElementById('parent');
    elig.modifyIds(parent, '-v2');
    expect(parent.querySelector('input').id).toBe('child-v2');
    expect(
      parent.querySelector('label').getAttribute('for')).toBe('child-v2');
  });

  test('Modifies name attributes in descendant elements', () => {
    document.body.innerHTML = `
      <span id="parent">
        <input type="radio" id="child" name="button-group">
        <input type="radio" id="child2" name="button-group">
      </span>`;
    const parent = document.getElementById('parent');
    elig.modifyIds(parent, '-v2');
    const inputs = parent.querySelectorAll('input');
    expect(inputs[0].name).toBe('button-group-v2');
    expect(inputs[1].name).toBe('button-group-v2');
  })
});

describe('clearInputs', () => {
  test('Clears all descendant inputs', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="text" id="input1" value="one">
        <input type="number" id="input2" value="2">
        <div>
          <input type="checkbox" id="input3" checked>
          <div>
            <input type="radio" id="input4" checked>
          </div>
        </div>
      </div>`;
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    expect(input1.value).toBe('one');
    expect(input2.value).toBe('2');
    expect(input3.checked).toBe(true);
    expect(input4.checked).toBe(true);
    elig.clearInputs(document.getElementById('parent'));
    expect(input1.value).toBe('');
    expect(input2.value).toBe('');
    expect(input3.checked).toBe(false);
    expect(input4.checked).toBe(false);
  });

  test('Clears all descendant selects', () => {
    document.body.innerHTML = `
      <div id="parent">
        <select id="input1">
          <option value="">None</option>
          <option value="A">A</option>
          <option value="B" selected>B</option>
        </select>
        <div>
          <select id="input2">
            <option value="">None</option>
            <option value="1" selected>1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>`;
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    expect(input1.value).toBe('B');
    expect(input2.value).toBe('1');
    elig.clearInputs(document.getElementById('parent'));
    expect(input1.value).toBe('');
    expect(input2.value).toBe('');
    expect(input1.querySelectorAll('option')[0].selected).toBe(true);
    expect(input2.querySelectorAll('option')[0].selected).toBe(true);
  });

  test('Does not clear button values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="button" id="input1" value="Click Here">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('Click Here');
  });

  test('Does not clear reset values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="reset" id="input1" value="Reset Me">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('Reset Me');
  });

  test('Does not clear submit values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="submit" id="input1" value="Submit NOW!">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('Submit NOW!');
  });

  test('Does not clear hidden values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="hidden" id="input1" value="Invisible">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('Invisible');
  });

  test('Does not clear radio values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="radio" id="input1" value="AM/FM">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('AM/FM');
  });

  test('Does not clear checkbox values', () => {
    document.body.innerHTML = `
      <div id="parent">
        <input type="checkbox" id="input1" value="DONE">
      </div>`;
    elig.clearInputs(document.getElementById('parent'));
    expect(document.getElementById('input1').value).toBe('DONE');
  });
});

describe('getValueOrNull', () => {
  test('Gets the value of an input field', () => {
    document.body.innerHTML = `
      <input type="text" id="test-text">
      <input type="text" id="test-number">`;

    let testId = 'test-text';
    let expectedVal = 'baz';
    expect(elig.getValueOrNull(testId)).toBe(null);
    document.getElementById(testId).value = expectedVal;
    expect(elig.getValueOrNull(testId)).toBe(expectedVal);
    document.getElementById(testId).value = '';
    expect(elig.getValueOrNull(testId)).toBe(null);

    testId = 'test-number';
    expectedVal = 314159;
    expect(elig.getValueOrNull(testId)).toBe(null);
    document.getElementById(testId).value = expectedVal;
    expect(elig.getValueOrNull(testId)).toBe(expectedVal.toString());
  });

  test.each(
    ['checkbox', 'radio']
  )('Gets the value of a %s element', (type) => {
    document.body.innerHTML = `
      <input type="${type}" id="test-${type}">`;

    const testId = `test-${type}`;
    expect(elig.getValueOrNull(testId)).toBe(false);
    document.getElementById(testId).checked = true;
    expect(elig.getValueOrNull(testId)).toBe(true);
  });

  test('Gets the value of a singleselect list', () => {
    document.body.innerHTML = `
      <ul id="test-singleselect" class="singleselect">
        <li>
          <input type="radio" id="option1" name="test-singleselect">
        </li>
        <li>
          <input type="radio" id="option2" name="test-singleselect">
        </li>
      </ul>`;

    const testId = 'test-singleselect';
    expect(elig.getValueOrNull(testId)).toBe(null);
    document.getElementById('option1').checked = true;
    expect(elig.getValueOrNull(testId)).toBe('option1');
    document.getElementById('option2').checked = true;
    expect(elig.getValueOrNull(testId)).toBe('option2');
  });

  test('Gets the value of a yes-no list', () => {
    document.body.innerHTML = `
      <ul id="test-question" class="yes-no">
        <li>
          <input type="radio" id="test-question-yes" name="test-question">
        </li>
        <li>
          <input type="radio" id="test-question-no" name="test-question">
        </li>
      </ul>`;

    const testId = 'test-question';
    expect(elig.getValueOrNull(testId)).toBe(null);
    document.getElementById(`${testId}-yes`).checked = true;
    expect(elig.getValueOrNull(testId)).toBe(true);
    document.getElementById(`${testId}-no`).checked = true;
    expect(elig.getValueOrNull(testId)).toBe(false);
  });

  test('Returns null for unsupported elements', () => {
    document.body.innerHTML = `
      <ul id="test-ul" class="unsupported">
        <li>A</li>
        <li>B</li>
      </ul>
      <ul id="bad-question" class="yes-no">
        <li>
          <input type="radio" id="bad-question-oui" name="bad-question">
        </li>
        <li>
          <input type="radio" id="bad-question-non" name="bad-question">
        </li>
      </ul>`;

    expect(elig.getValueOrNull('test-ul')).toBe(null);
    expect(elig.getValueOrNull('bad-question')).toBe(null);
    document.getElementById(`bad-question-oui`).checked = true;
    expect(elig.getValueOrNull('bad-question')).toBe(null);
    document.getElementById(`bad-question-non`).checked = true;
    expect(elig.getValueOrNull('bad-question')).toBe(null);

  });
});
