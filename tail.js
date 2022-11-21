// const assertEqual = require("./assertEqual");
// const assertArraysEqual = require('../assertArraysEqual')

//to reuse assertEqual to check if actual is equal to expected actual being (arr) and (expected)
//use for loop to loop through array, and return arr[0] first, then compare actual of arr[0] if it's equal to expected from TEST CODE then perfect it works
const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};


module.exports = tail;