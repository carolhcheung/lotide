const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop through obj, 
// each iteration of the key of the obj
// test key against callback function stars === 2
// if match is found stop and return result

const findKey = function(obj, callback) {
  let result = "";
for (let key in obj) {
  if (callback(obj[key]))         //callback executed here obj[key] = {stars:2} and testing key
    return = key;
    break;
  } 
return result; 
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"