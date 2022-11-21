const assertEqual = require("./assertEqual");

//to reuse assertEqual to check if actual is equal to expected actual being (arr) and (expected)
//use for loop to loop through array, and return arr[0] first, then compare actual of arr[0] if it's equal to expected from TEST CODE then perfect it works
const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  return newArr;
};

assertEqual(tail([1,2,3]), [2,3]);

module.exports = tail;