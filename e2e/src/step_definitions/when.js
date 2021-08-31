const { When } = require('cucumber');
const { click, selectDropdownValue } = require('../utilities/elementsCommonActions');


When(
  /^I (?:tap|click) on "([^"]*)" (?:textBox|field|button|link|icon|arrow|label|tab)$/,
  { timeout: 10 * 2000 },
  async (elementKey) => {
    await click(elementKey);
  }
);

When(
  /^I select "([^"]*)" from dropdown$/,
  { timeout: 10 * 1000 },
  async (dropdownValue) => {
    await selectDropdownValue(dropdownValue);
  }
);
