// test/letterPositions.js
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const letterPositions = require("../letterPositions");

//TEST CODE
const results = letterPositions("hello world");
console.log(results)

assertArraysEqual(letterPositions("hello").e, [1]);  //checks if there's #e = 1