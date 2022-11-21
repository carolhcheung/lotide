// test/map.js
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const map = require("../map");

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

console.log(results1);


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
