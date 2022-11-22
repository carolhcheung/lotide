const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const without = function(source, itemsToRemove) {
  let updatedItems = [];
  for (let i = 0; i < source.length; i++) {
    let matches = [];
    for (let x = 0; x < itemsToRemove.length; x++) {
      
      if (source[i] === itemsToRemove[x]) {
        matches.push(source[i]);
      }
    }
    if (matches.indexOf(source[i]) === -1) {
      updatedItems.push(source[i]);
    }
  }
  return updatedItems;
};

module.exports = without;