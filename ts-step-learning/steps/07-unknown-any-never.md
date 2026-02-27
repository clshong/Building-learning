# Step 07 unknown / any / never

## 原理理解
- `any` 放弃检查。
- `unknown` 更安全，使用前必须收窄。
- `never` 表示不应到达。

## 练习
1. 用 `unknown` 替代 `any` 并加类型守卫。
2. 写穷尽检查函数。

## 通关标准
- 能避免滥用 any。
