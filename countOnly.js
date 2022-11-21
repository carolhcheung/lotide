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

module.exports = countOnly;