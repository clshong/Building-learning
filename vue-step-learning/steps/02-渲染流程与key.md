# Step 02 渲染流程与 key

## 原理理解
- 模板编译为 render，render 产出 VNode，patch 比对更新 DOM。
- 列表中 `key` 决定节点复用策略。

## 练习
1. 用 `index` 当 key，观察输入框错位问题。
2. 改为稳定 `id`，比较行为。

## 通关标准
- 能解释 key 错误导致的 UI 串值。
