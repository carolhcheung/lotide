// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let result = {};                      //set empty object for accumulators
  for (let character of string) {       //loop the characters 
    if (character !== " ") {           //if character is not space proceed
      if (!result[character]) {        //if doesn't exist already
        result[character] = 1;         // doesn't exist before, give it 1
      } else {                          
        result[character] += 1;       //if exist before give it 1+1
      }
    }
  }
  return result;                      //return total new object accumulator
};