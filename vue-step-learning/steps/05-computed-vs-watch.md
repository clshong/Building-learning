# Step 05 computed vs watch

## 原理理解
- `computed`：派生值，带缓存。
- `watch`：副作用触发，请求/日志等。

## 练习
1. 将一个不必要 `watch` 改成 `computed`。
2. 写一个带防抖的 watch 请求示例。

## 通关标准
- 能区分“派生数据”和“副作用”。
