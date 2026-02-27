"use strict";

// Step 05: 原型链

function User(name) {
  this.name = name;
}

User.prototype.say = function () {
  return `hello ${this.name}`;
};

const u = new User("alice");

console.log("own name:", u.name);
console.log("from prototype say:", u.say());
console.log("proto is User.prototype:", Object.getPrototypeOf(u) === User.prototype);
