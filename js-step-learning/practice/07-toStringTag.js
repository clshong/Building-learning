"use strict";

// Step 07: Symbol.toStringTag

class Course {}
Course.prototype[Symbol.toStringTag] = "Course";

const c = new Course();
console.log(Object.prototype.toString.call(c)); // [object Course]
