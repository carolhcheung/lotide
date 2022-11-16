// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
   if (actual[i] !== expected[i]) {
     return false;
   }
  }
  return true;
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);