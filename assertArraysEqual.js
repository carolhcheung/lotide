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


// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]));