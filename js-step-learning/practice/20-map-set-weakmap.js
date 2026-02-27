"use strict";

// Step 20: Map/Set/WeakMap

const set = new Set([1, 1, 2, 3, 3]);
console.log("set size:", set.size); // 3

const map = new Map();
map.set("name", "course");
map.set(1, "one");

const keyObj = { id: 1 };
map.set(keyObj, "object-key");

const weakMap = new WeakMap();
const privateKey = {};
weakMap.set(privateKey, { token: "secret" });

console.assert(set.size === 3, "Set should de-duplicate values");
console.assert(map.get(keyObj) === "object-key", "Map should support object keys");
console.assert(weakMap.get(privateKey).token === "secret", "WeakMap should store object-keyed metadata");
console.log("map/set/weakmap tests passed");
