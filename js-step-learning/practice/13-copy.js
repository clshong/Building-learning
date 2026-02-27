"use strict";

// Step 13: 深浅拷贝

function deepClone(input, seen = new WeakMap()) {
  if (input === null || typeof input !== "object") return input;
  if (seen.has(input)) return seen.get(input);

  const out = Array.isArray(input) ? [] : {};
  seen.set(input, out);

  for (const key of Reflect.ownKeys(input)) {
    out[key] = deepClone(input[key], seen);
  }
  return out;
}

const source = { nested: { count: 1 } };
const shallow = { ...source };
const deep = deepClone(source);

shallow.nested.count = 9;
console.log("source after shallow change:", source.nested.count); // 9

source.nested.count = 1;
deep.nested.count = 7;
console.log("source after deep change:", source.nested.count); // 1

console.assert(source.nested.count === 1, "deep clone should not share nested refs");
console.log("copy tests passed");
