const assertEqual = require("./assertEqual");

const head = function(arr) {   //use for loop to loop through array, and return arr[0] first, then compare actual of arr[0] if it's equal to expected from TEST CODE then perfect it works
  for (let i = 0; i < arr.length; i++) {
    return arr[0];
  }
};

//code is used to check if actual = expected, try [5], === 5? good
//then check empty array [] === undefined? good


module.exports = head;