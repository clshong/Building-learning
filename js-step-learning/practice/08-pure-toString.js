"use strict";

// Step 08: 获取纯净 toString

const pureToString = Function.prototype.call.bind(Object.prototype.toString);

const original = pureToString([]);
Object.prototype.toString = function () {
  return "[object Hacked]";
};

console.log("polluted result:", Object.prototype.toString.call([])); // [object Hacked]
console.log("pure result:", pureToString([])); // [object Array]
console.log("original before pollution:", original); // [object Array]
