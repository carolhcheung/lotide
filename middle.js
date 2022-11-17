const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
   if (actual[i] !== expected[i]) {
     return false;
   }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (result === false) {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function(array) {
  let result = [];
  let mid = array.length / 2;
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(mid)]];
    } else {
      return [array[mid - 1], array[mid]];
   }
}
// console.log(middle([1], []));
// console.log(middle([1, 2, 3, 4]));


assertArraysEqual(middle([1]), []);
middle([1, 2]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
middle([1, 2, 3]); // => [2]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
middle([1, 2, 3, 4, 5]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
middle([1, 2, 3, 4]); // => [2, 3]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
