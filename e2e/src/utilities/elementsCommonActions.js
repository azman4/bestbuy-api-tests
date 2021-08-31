const { browser, element, by } = require('protractor');
const { use, expect } = require('chai');
const ChaiAsPromised = require('chai-as-promised');
const { getTestData } = require('../input_data');
const { getElement } = require('./findElements');

use(ChaiAsPromised);

/*
* Function to Navigate to a given URL
* @param: URL
*/
const navigate = async (url) => {
  browser.waitForAngularEnabled(false);
  const { currentData } = browser.params;
  const actualURL = getTestData(url, currentData);
  await browser.get(actualURL).catch((error) => {
    throw new Error(`Unable to navigate to the URL - ${error}`);
  });
};

/*
* Function to Click on a given Web element
* @param: webElement
*/
const click = async (locatorName) => {
  browser.driver.ignoreSynchronization = true;
  browser.waitForAngularEnabled(false);
  const ele = await getElement(locatorName);
  await ele.click();
  await browser.sleep(3000);
};

/*
* Function to enter a value in a given Textbox
* @param: webElement (Of the Textbox) & input text
*/
const enterKeys = async (locatorName, inputText) => {
  const { currentData } = browser.params;
  const text = getTestData(inputText, currentData);
  const ele = await getElement(locatorName);
  await ele.clear();
  await ele.sendKeys(text);
};

/*
* Function to select a Dropdown value in a given Dropdown box
* @param: Dropdown value
*/
const selectDropdownValue = async (dropdownValue) => {
  const { currentData } = browser.params;
  const value = getTestData(dropdownValue, currentData);
  await element(by.cssContainingText('option', `${value}`)).click();
};

/*
* Function to Verify the presence of a given Web element
* @param: webElement
*/
const verifyElementIsDisplayed = async (locatorName) => {
  const ele = await getElement(locatorName);
  const isElementDisplayed = await ele.isDisplayed();
  return expect(isElementDisplayed).to.be.equal(true);
};

/*
* Function to Verify the Text of a given Web element
* @param: webElement
*/
const verifyText = async (expectedtext, locatorName) => {
  const { currentData } = browser.params;
  const expected = getTestData(expectedtext, currentData);
  const ele = await getElement(locatorName);
  const actual = await ele.getText();
  return expect(actual).to.be.equal(expected);
};

/*
* Function to Verify the Text of a given Web element
* @param: webElement
*/
const verifyElementIsNotPresent = async (locatorName) => {
  const ele = await getElement(locatorName);
  const elementNotPresent = await ele.isPresent();
  return expect(elementNotPresent).to.be.equal(false);
};

module.exports = {
  navigate,
  click,
  enterKeys,
  selectDropdownValue,
  verifyElementIsDisplayed,
  verifyText,
  verifyElementIsNotPresent
};
