"use strict";

// Step 19: Proxy 与 Reflect

const target = { name: "Tom", age: 18 };

const user = new Proxy(target, {
  get(obj, key, receiver) {
    if (!(key in obj)) return "N/A";
    return Reflect.get(obj, key, receiver);
  },
  set(obj, key, value, receiver) {
    if (key === "age" && (!Number.isInteger(value) || value < 0)) {
      throw new TypeError("age must be a non-negative integer");
    }
    return Reflect.set(obj, key, value, receiver);
  },
});

user.age = 20;
console.log("age:", user.age);
console.log("unknown:", user.title);

let caught = false;
try {
  user.age = -1;
} catch (err) {
  caught = true;
  console.log("set blocked:", err.message);
}

console.assert(user.age === 20, "age should remain valid value");
console.assert(caught === true, "invalid assignment should throw");
console.log("proxy/reflect tests passed");
