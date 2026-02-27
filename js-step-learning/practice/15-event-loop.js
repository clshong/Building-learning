"use strict";

// Step 15: 事件循环

const order = [];

setTimeout(() => {
  order.push("macro");
  const result = order.join(" > ");
  console.log(result);
  console.assert(result === "sync > micro-1 > micro-2 > macro", "unexpected event loop order");
  console.log("event loop tests passed");
}, 0);

Promise.resolve().then(() => {
  order.push("micro-1");
});

queueMicrotask(() => {
  order.push("micro-2");
});

order.push("sync");
