const Axios = require('axios');
const { browser } = require('protractor');

let productID;
let productDescription;

const expect = require('chai').expect;
const { getTestData } = require('../input_data');
const BestBuyE2E = require('../input_data/bestBuyData');
const Logger = require('./logger');

const bestBuyAPI = function () {

  /*
    * Function to Create a product based on 3 input values
    * @param: Endpoint URL, Body, Expected response code
  */
  this.createProduct = async function (endpoint, body, staCode) {
    const { currentData } = browser.params;
    const createProductEndpoint = getTestData(endpoint, currentData);
    const productBody = BestBuyE2E[body];
    const statusCode = getTestData(staCode, currentData);
    try {
      const response = await Axios({
        method: 'post',
        url: createProductEndpoint,
        data: productBody
      });
      Logger.info('Create Product response status code: ' + response.status);
      expect(response.status).to.be.equal(parseInt(statusCode));
      productID = response.data.id;
      productDescription = productBody.description;
    } catch (error) {
      Logger.error('Error occurred while creating a product' + error);
      expect(error.response.status).to.be.equal(parseInt(statusCode));
    }
  };

  /*
    * Function to Verify a created product based on 2 input values and created Product ID & Description values
    * @param: Endpoint URL, Expected response code
  */
  this.getProductDetails = async function (endpoint, staCode) {
    const { currentData } = browser.params;
    const getProductEndpoint = getTestData(endpoint, currentData);
    const statusCode = getTestData(staCode, currentData);
    try {
      const response = await Axios({
        method: 'get',
        url: getProductEndpoint + productID
      });
      Logger.info('Get Product Details response status code: ' + response.status);
      expect(response.status).to.be.equal(parseInt(statusCode)) &&
      expect(response.data.id).to.be.equal(productID) &&
      expect(response.data.description).to.be.equal(productDescription);
    } catch (error) {
      Logger.error('Error occurred while getting a product details' + error);
      expect(error.response.status).to.be.equal(parseInt(statusCode));
    }
  };

  /*
    * Function to Updated an existing product based on 3 input values and created product Id
    * @param: Endpoint URL, Updated Body, Expected response code
  */
  this.updateProduct = async function (endpoint, body, staCode) {
    const { currentData } = browser.params;
    const createProductEndpoint = getTestData(endpoint, currentData);
    const productBody = BestBuyE2E[body];
    const statusCode = getTestData(staCode, currentData);
    try {
      const response = await Axios({
        method: 'patch',
        url: createProductEndpoint + productID,
        data: productBody
      });
      productDescription = productBody.description;
      Logger.info('Create Product response status code: ' + response.status);
      expect(response.status).to.be.equal(parseInt(statusCode)) &&
      expect(response.data.id).to.be.equal(productID) &&
      expect(response.data.description).to.be.equal(productDescription);
    } catch (error) {
      Logger.error('Error occurred while updating a product' + error);
      expect(error.response.status).to.be.equal(parseInt(statusCode));
    }
  };

  /*
    * Function to Delete a created product based on 2 input values and created product Id
    * @param: Endpoint URL, Expected response code
  */
  this.deleteProduct = async function (endpoint, staCode) {
    const { currentData } = browser.params;
    const getProductEndpoint = getTestData(endpoint, currentData);
    const statusCode = getTestData(staCode, currentData);
    try {
      const response = await Axios({
        method: 'delete',
        url: getProductEndpoint + productID
      });
      Logger.info('Delete Product response status code: ' + response.status);
      expect(response.status).to.be.equal(parseInt(statusCode)) &&
      expect(response.data.id).to.be.equal(productID) &&
      expect(response.data.description).to.be.equal(productDescription);
    } catch (error) {
      Logger.error('Error occurred while deleting a product' + error);
      expect(error.response.status).to.be.equal(parseInt(statusCode));
    }
  };

  /*
    * Function to Verify if a product is deleted based on 2 input values and deleted product Id
    * @param: Endpoint URL, Expected response code
  */
  this.verifyProductDeleted = async function (endpoint, staCode) {
    const { currentData } = browser.params;
    const getProductEndpoint = getTestData(endpoint, currentData);
    const statusCode = getTestData(staCode, currentData);
    const deleteMessage = `No record found for id '${productID}'`;
    try {
      const response = await Axios({
        method: 'get',
        url: getProductEndpoint + productID
      });
      Logger.info('Get Product Details response status code: ' + response.status);
      expect(response.status).to.be.equal(parseInt(statusCode)) &&
      expect(response.data.message).to.be.equal(deleteMessage);
    } catch (error) {
      Logger.error('Error occurred while getting a product details' + error);
      expect(error.response.status).to.be.equal(parseInt(statusCode));
    }
  };
}

module.exports = new bestBuyAPI();
