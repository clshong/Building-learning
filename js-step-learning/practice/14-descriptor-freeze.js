"use strict";

// Step 14: 属性描述符与对象冻结

const user = {};
Object.defineProperty(user, "id", {
  value: 1001,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log("descriptor:", Object.getOwnPropertyDescriptor(user, "id"));

try {
  user.id = 2002;
} catch (err) {
  console.log("write blocked:", err.name);
}
console.assert(user.id === 1001, "id should remain unchanged");

const cfg = { port: 3000, nested: { v: 1 } };
Object.freeze(cfg);
console.assert(Object.isFrozen(cfg) === true, "cfg should be frozen");

// freeze 是浅冻结：nested 仍可改
cfg.nested.v = 2;
console.assert(cfg.nested.v === 2, "nested object can still mutate");
console.log("descriptor/freeze tests passed");
