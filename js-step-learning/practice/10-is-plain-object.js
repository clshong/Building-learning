"use strict";

// Step 10: 实现判断普通对象

function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;

  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;

  let root = proto;
  while (Object.getPrototypeOf(root) !== null) {
    root = Object.getPrototypeOf(root);
  }

  return proto === root;
}

console.assert(isPlainObject({}) === true, "{} should be true");
console.assert(isPlainObject(new Object()) === true, "new Object should be true");
console.assert(isPlainObject(Object.create(null)) === true, "Object.create(null) should be true");
console.assert(isPlainObject([]) === false, "[] should be false");
console.assert(isPlainObject(new Date()) === false, "Date should be false");
console.assert(isPlainObject(function () {}) === false, "function should be false");
console.assert(isPlainObject(new Map()) === false, "Map should be false");

console.log("isPlainObject tests passed");
