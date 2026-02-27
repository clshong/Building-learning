# Step 17 async/await 与并发控制

目标：写出可读、可控的异步代码。

## 关键点
- `await` 让异步流程看起来像同步
- 顺序 await = 串行
- `Promise.all` = 并行等待
- `Promise.allSettled` 适合“全部收集结果”场景

## 通关标准
- 你能根据场景选择串行或并行。
