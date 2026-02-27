"use strict";

// Step 16: Promise 链与错误冒泡

function task(name, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) reject(new Error(`${name} failed`));
      else resolve(name);
    }, 20);
  });
}

const trace = [];

task("A")
  .then((v) => {
    trace.push(v);
    return task("B");
  })
  .then((v) => {
    trace.push(v);
    return task("C", true);
  })
  .catch((err) => {
    trace.push(err.message);
    return "Recovered";
  })
  .then((v) => {
    trace.push(v);
  })
  .finally(() => {
    trace.push("finally");
    console.log(trace.join(" | "));
    console.assert(trace[0] === "A", "first step should be A");
    console.assert(trace.includes("C failed"), "error should bubble to catch");
    console.assert(trace.includes("Recovered"), "chain should recover");
    console.log("promise chain tests passed");
  });
