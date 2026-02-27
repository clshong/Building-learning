"use strict";

// Step 06: 修改原型返回结果

function User(name) {
  this.name = name;
}

User.prototype.label = function () {
  return `User:${this.name}`;
};

const u = new User("tom");
console.log("before change:", u.label()); // User:tom

User.prototype.label = function () {
  return `Member:${this.name}`;
};

console.log("after change:", u.label()); // Member:tom
