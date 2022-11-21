const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

let obj1key = Object.keys(object1);
let obj2key = Object.keys(object2);

if (obj1key.length !== obj2key.length) {
  return false;
} else {
for (const key of obj1key) {
  if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    
    if (eqArrays(object1[key], object2[key]) === false) {
        return false;
    } 
  } else if(object1[key] !== object2[key]) {
      return false;
  } 
  }
  return true;
}
};

module.exports = eqObjects;