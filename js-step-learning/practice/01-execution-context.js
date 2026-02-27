"use strict";

// Step 01: 执行上下文
// 任务：先写下你预测的输出，再运行验证。

console.log("a before init =", a); // 预期：? undefined
console.log("add(2,3) =", add(2, 3)); // 预期：?  5

var a = 10;
function add(x, y) {
  return x + y;
}

console.log("a after init =", a); // 预期：? 10
