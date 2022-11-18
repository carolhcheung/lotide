const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) { 
  const results = [];
  for (let item of array) {
    results.push(callback(item));  //this will push the first letters into new array results = []
  }
  return results;
}

const results1 = map(words, word => word[0]);  //reference to ln3 (array, callback) so callback is word(before) = word[0](after) first letter

console.log(results1);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

