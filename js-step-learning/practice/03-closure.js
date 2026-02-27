"use strict";

// Step 03: 闭包
// 任务：补全 createCounter(start)

function createCounter(start) {
  let count = start;
  return function () {
    count += 1;
    return count;
  };
}

const c1 = createCounter(0);
const c2 = createCounter(10);

console.log(c1(), c1(), c1()); // 1 2 3
console.log(c2(), c2()); // 11 12
