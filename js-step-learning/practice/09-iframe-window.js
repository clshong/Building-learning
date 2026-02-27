"use strict";

// Step 09: iframe 内容需要在浏览器环境运行。
// 在 Node 中没有 window/iframe，这里只做结论记录。

console.log("结论: iframe.contentWindow !== window");
console.log("结论: 不同 window 下 instanceof 可能失效");
