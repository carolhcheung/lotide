const assertEqual = require("./assertEqual");
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let item of allItems) {   //loop the array of names first
    if (itemsToCount[item]) {    //ie check if ("jason:true") the continue if ("jason:false") dont continue return result at bottom
      if (result[item]) {       //result[item] = the name is true means it exists in the object already
        result[item] += 1;     //then add 1 to result which is the accumulator 1+1
      } else {
        result[item] = 1;     //if line 16 is false and doesn't exist again, first time appearing, so =1
      }
    }
  }
  return result
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;