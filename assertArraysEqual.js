// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else if (actual == null || expected == null) {
    return false;
  } else if (actual.length !== expected.length) {
    return false;
  }
   for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
   }
   return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));