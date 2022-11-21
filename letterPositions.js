const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const letterPositions = function(sentence) {
  let results = {};
  for (const i in sentence) {  //looking for index in sentence so not letter of sentence which will be a value
    const letter = sentence[i];  //looking for letter which will be sentence[i]
    if (letter === " ") {  //skips the spaces as we don't want to count spaces
      continue;           //better than break because it continues with the loop
    }

    if (!results[letter]) {  //if there isn't a results[letter] 
      results[letter] = [];   //then create an empty [] to put the results[letter] inside
    }

    results[letter].push(Number(i));  //when find matching letter, push(i) into array, Number as question wants numbers not strings

  } 

  return results;// logic to update results here
}

const results = letterPositions("hello world");
console.log(results)

assertArraysEqual(letterPositions("hello").e, [1]);  //checks if there's #e = 1

module.exports = letterPositions;