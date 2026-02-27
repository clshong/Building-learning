"use strict";

// Step 12: let/const 与 TDZ

try {
  eval("console.log(x); let x = 1;");
} catch (err) {
  console.log("TDZ error:", err.name); // ReferenceError
}

{
  let a = 1;
  const b = 2;
  console.log("block values:", a, b);
}

const profile = { score: 1 };
profile.score = 2;
console.assert(profile.score === 2, "const object property can change");
console.log("let/const/tdz tests passed");
