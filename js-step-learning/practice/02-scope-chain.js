"use strict";

// Step 02: 作用域链

const label = "global";

function outer() {
  const label = "outer";

  function inner() {
    console.log("inner sees:", label); // 预期：outer
  }

  return inner;
}

const fn = outer();
fn();
console.log("global label:", label);
