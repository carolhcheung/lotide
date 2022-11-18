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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);