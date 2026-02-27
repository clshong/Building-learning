"use strict";

// Step 18: 迭代器与生成器

const range = {
  start: 1,
  end: 3,
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i += 1) {
      yield i;
    }
  },
};

function* ids() {
  yield "u1";
  yield "u2";
}

const values = [...range];
const idValues = [...ids()];

console.log("range:", values.join(","));
console.log("ids:", idValues.join(","));

console.assert(values.join(",") === "1,2,3", "range iterator should work");
console.assert(idValues[1] === "u2", "generator should yield values in order");
console.log("iterator/generator tests passed");
