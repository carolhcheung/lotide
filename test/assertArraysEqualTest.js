// test/assertArraysEqualTest.js
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [1, 2, 3]);
  });
  it("returns ["1", "2", "3", "4"] for ["1", "2", "3"]", () => {
    assert.deepEqual(tail(["1", "2", "3"]), ["1", "2", "3", "4"]);
  });
  
});

// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]));
