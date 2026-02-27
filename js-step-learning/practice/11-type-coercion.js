"use strict";

// Step 11: 数据类型与隐式转换

console.log("'5' - 1 =", "5" - 1); // 4
console.log("'5' + 1 =", "5" + 1); // 51
console.log("Number('42px') =", Number("42px")); // NaN
console.log("Boolean('0') =", Boolean("0")); // true

console.assert("5" - 1 === 4, "string minus number should be 4");
console.assert("5" + 1 === "51", "string plus number should be '51'");
console.assert(Number("42") === 42, "Number('42') should be 42");
console.assert(Number.isNaN(Number("42px")), "Number('42px') should be NaN");
console.log("type coercion tests passed");
