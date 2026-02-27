# Step 01 盒模型与 BFC

## 原理理解
- 盒模型：`content + padding + border + margin`。
- `box-sizing: border-box` 让宽高更可控。
- BFC 是独立布局上下文，可隔离浮动、避免某些重叠问题。

## 练习
1. 同样 `width:200px`，对比 `content-box` 与 `border-box` 占位。
2. 用 BFC 解决父元素高度塌陷。

## 通关标准
- 能解释现代项目为什么通常全局设 `border-box`。
