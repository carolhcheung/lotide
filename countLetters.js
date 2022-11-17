// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = function (string) {
  let result = {};
  for (let character of string) {
    if (character !== " ") {
      if (!result[character]) {
        result[character] = 1;  // left hand side is key; right hand side is value
      } else {
        result[character] += 1;
      }
    }
  }
  return result
}