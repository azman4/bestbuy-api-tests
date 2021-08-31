const Path = require('path');
const { readSync, ABSOLUTE_PATHS } = require('readdir');

const allPageObjects = {};

const populatePageObjects =  () => {
  const arr = readSync((process.cwd(), __dirname), ['*.js'], ABSOLUTE_PATHS);
  arr.forEach((file) => {
    const fileObject = require(Path.resolve(process.cwd(), __dirname, file));

    Object.assign(allPageObjects, fileObject);
  });
  Object.keys(allPageObjects).filter((locator) => Object.keys(allPageObjects[locator]).forEach((key) => {
    if (!allPageObjects[locator][key]) {
      delete allPageObjects[locator][key];
    }
  }));

  return allPageObjects;
};

exports.populatePageObjects = populatePageObjects();
