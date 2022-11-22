const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  let results = [];
  for (let i of array) {
    if (callback(i)) {
      break;
      }
      results.push(i);
  }
  return results;
}

module.exports = takeUntil;