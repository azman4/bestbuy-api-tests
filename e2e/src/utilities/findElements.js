const { element, by } = require('protractor');
const Chai = require('chai');
const ChaiAsPromised = require('chai-as-promised');
const { populatePageObjects } = require('../page_objects_repository/allPagesObject');
const expect = require('chai').expect;

Chai.use(ChaiAsPromised);
const Logger = require('../utilities/logger');

/*
* Function to get the webElement locator of a given locatorKey from all the files in page_objects_repository
* @param: webElement (locatorKey)
*/
const getElement = (locatorKey) => {
  let flag = false;
  let ele = null;
  Object.keys(populatePageObjects[locatorKey]).forEach((locatorKeyString) => {
    if (flag === false) {
      switch (locatorKeyString.trim()) {
      case 'buttonText': {
        ele = element(by.buttonText(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'binding': {
        ele = element(by.binding(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'exactBinding': {
        ele = element(by.exactBinding(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'model': {
        ele = element(by.model(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'partialButtonText': {
        ele = element(by.partialButtonText(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'linkText': {
        ele = element(by.linkText(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'partialLinkText': {
        ele = element(by.partialLinkText(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'name': {
        ele = element(by.name(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'tagName': {
        ele = element(by.tagName(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'xpath': {
        ele = element(by.xpath(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'id': {
        ele = element(by.id(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'css': {
        ele = element(by.css(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'className': {
        ele = element(by.className(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      case 'dataAutomationId': {
        ele = element(by.dataAutomationId(populatePageObjects[locatorKey][locatorKeyString]));
        flag = ele.isPresent();
        break;
      }

      default: {
        break;
      }
      }

      if (!flag) {
        Logger.info(`Invalid locator for the Object - ${locatorKeyString} - ${locatorKey} - ${populatePageObjects[locatorKey][locatorKeyString]}`);
        expect(flag).to.be.false;
      }
    }
  });
  return ele;
};

exports.getElement = getElement;
