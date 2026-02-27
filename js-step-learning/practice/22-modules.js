"use strict";

// Step 22: 模块化（CommonJS 与 ESM）

const cjs = require("./22-module-cjs.cjs");

(async function run() {
  const esm = await import("./22-module-esm.mjs");

  console.log("cjs:", cjs.kind, cjs.add(1, 2));
  console.log("esm:", esm.kind, esm.add(3, 4));

  console.assert(cjs.kind === "cjs", "should load cjs module");
  console.assert(esm.kind === "esm", "should load esm module");
  console.log("module tests passed");
})();
