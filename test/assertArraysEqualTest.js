// test/assertArraysEqualTest.js
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]));
