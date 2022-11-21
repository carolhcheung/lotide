const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

module.exports = map;