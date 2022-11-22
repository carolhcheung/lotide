const middle = function(array) {
  let result = [];
  let mid = array.length / 2;
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 1) {
    return [array[Math.floor(mid)]];
    } else {
      return [array[mid - 1], array[mid]];
   }
}

module.exports = middle;
