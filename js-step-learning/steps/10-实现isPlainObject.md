# Step 10 实现判断普通对象函数

目标：实现可靠的 `isPlainObject`。

## 要求
- `{} / new Object()` 为 true
- `Object.create(null)` 为 true（按本课程约定）
- 数组、函数、日期、正则、Map/Set 为 false

## 参考思路
- 先判断 `value !== null && typeof value === "object"`
- 再看其原型链根节点是否为 `Object.prototype` 或 `null`

## 通关标准
- 你写的函数能通过练习文件里的断言。
