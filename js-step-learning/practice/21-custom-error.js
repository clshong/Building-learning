"use strict";

// Step 21: 错误处理与自定义错误

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function parseUser(input) {
  if (!input || typeof input !== "object") {
    throw new ValidationError("input must be object", "input");
  }
  if (!input.name) {
    throw new ValidationError("name is required", "name");
  }
  return { name: String(input.name) };
}

try {
  parseUser({});
} catch (err) {
  console.log(err.name, err.message, err.field);
  console.assert(err instanceof ValidationError, "should throw ValidationError");
}

const ok = parseUser({ name: "Alice" });
console.assert(ok.name === "Alice", "valid input should pass");
console.log("custom error tests passed");
