# Step 09 iframe 内部 window 是否相同

目标：理解跨 realm 对象比较问题。

## 结论
- `iframe.contentWindow !== window`
- 不同 window 有不同的内建构造函数（`Array/Object/Function`）。
- 所以跨 iframe 的 `instanceof` 可能失败。

## 示例
```js
const arr = iframe.contentWindow.Array(1, 2, 3);
console.log(arr instanceof Array); // 可能 false
```

## 通关标准
- 你能解释为什么跨窗口要谨慎使用 `instanceof`。
