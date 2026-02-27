# Step 06 useMemo 与 useCallback

## 原理理解
- `useMemo` 缓存计算结果，`useCallback` 缓存函数引用。
- 两者用于减少不必要开销，但不是“默认必用”。

## 练习
1. 在大列表过滤场景中使用 `useMemo`。
2. 在子组件 `memo` 场景中验证 `useCallback` 的效果。

## 通关标准
- 能判断“是否值得做记忆化优化”。
