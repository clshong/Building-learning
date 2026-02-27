"use strict";

// Step 04: this 绑定规则

function show() {
  return this && this.name;
}

const obj = { name: "obj", show };
const other = { name: "other" };

console.log("implicit:", obj.show()); // obj
console.log("explicit:", show.call(other)); // other

const bound = show.bind({ name: "bound" });
console.log("bind:", bound()); // bound

function Person(name) {
  this.name = name;
}
const p = new Person("new");
console.log("new:", p.name); // new
