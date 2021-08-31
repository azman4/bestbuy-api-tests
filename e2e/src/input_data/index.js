const { Get, forEach, Replace } = require('lodash');
const BestBuyData = require('./bestBuyData');

const dataMap = {
  ...BestBuyData,
};

/*
* Function to get the respective variable value from all the underlying files in input_data folder
* @param: Variable key & Data file(s) reference
*/
const getTestData = (key, data) => {
  let dataEntry = dataMap[key];

  const variables = dataEntry.match(new RegExp(`{(.)*?}`, 'g'));

  // replace any variables with the data
  if (variables && variables.length > 0) {
    forEach(variables, (variable) => {
      // remove { } from the variable name
      const cleanedVariable = variable.substring(1, variable.length - 1);

      // get the actual data from the current data passed
      // based on the variable defined
      const value = Get(data, cleanedVariable);

      if (typeof value === 'string') {
        // replace the variable with the value
        dataEntry = Replace(dataEntry, variable, value);
      } else {
        dataEntry = value;
      }
    });
  }

  // return the compiled data
  return dataEntry;
};

module.exports = {
  getTestData
};
