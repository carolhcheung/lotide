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


module.exports = findKeyByValue;