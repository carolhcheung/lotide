// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
   if (actual[i] !== expected[i]) {
     return false;
   }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (result === false) {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["hello", "world", "lighthouse"];
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
// assertArraysEqual(without(["5", "6", "7"], [1, 7, "6"]));
assertArraysEqual(words, ["lighthouse"]);