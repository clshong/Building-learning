"use strict";

// Step 17: async/await 与并发控制

function delay(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(label), ms);
  });
}

async function sequential() {
  const start = Date.now();
  await delay(60, "A");
  await delay(60, "B");
  return Date.now() - start;
}

async function parallel() {
  const start = Date.now();
  await Promise.all([delay(60, "A"), delay(60, "B")]);
  return Date.now() - start;
}

(async function run() {
  const seq = await sequential();
  const par = await parallel();

  console.log("sequential(ms):", seq);
  console.log("parallel(ms):", par);

  console.assert(seq > par + 30, "parallel should be significantly faster");
  console.log("async/await concurrency tests passed");
})();
