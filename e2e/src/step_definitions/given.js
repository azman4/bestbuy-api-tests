const { Given, Then } = require('cucumber');
const { navigate } = require('../utilities/elementsCommonActions');
const { createProduct, updateProduct, deleteProduct } = require('../utilities/bestBuyApis');

Given(/^I launch the "([^"]*)" site$/,
  { timeout: 10 * 3000 }, async (URL) => {
    await navigate(URL);
  });

  Given(/^I request the Post "([^"]*)" endpoint with "([^"]*)" payload, I get "([^"]*)" in response$/,
  { timeout: 10 * 1000 }, async (endpoint, body, staCode) => {
    await createProduct(endpoint, body, staCode);
  });

  Given(/^I request the Patch "([^"]*)" endpoint with "([^"]*)" payload, I get "([^"]*)" in response$/,
  { timeout: 10 * 1000 }, async (endpoint, body, staCode) => {
    await updateProduct(endpoint, body, staCode);
  });

  Then(/^I request the Delete "([^"]*)" endpoint, I get "([^"]*)" in response$/,
  { timeout: 10 * 1000 }, async (endpoint, staCode) => {
    await deleteProduct(endpoint, staCode);
  }); 