// test/withoutTest.js
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");

const words = ["hello", "world", "lighthouse"];


assertArraysEqual(without(["5", "6", "7"], [1, 7, "6"]));
assertArraysEqual(words, ["lighthouse"]);
