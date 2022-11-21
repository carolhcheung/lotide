const assertEqual = require("./assertEqual");


const findKeyByValue = function(genre, show) {
  let genreOutput = Object.keys(genre);
  for (let element of genreOutput) {
    if (genre[element] === show) {
      return element;
    } 
  }
    return undefined; 
  };
  

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;