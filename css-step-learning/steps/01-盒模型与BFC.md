# Step 01 盒模型与 BFC

## 原理理解
- 盒模型：`content + padding + border + margin`。
- `box-sizing: border-box` 让宽高更可控。
- BFC 是独立布局上下文，可隔离浮动、避免某些重叠问题。
根元素：<html>元素本身就是一个BFC。
浮动元素：元素的 float值不为 none。
绝对定位元素：元素的 position值为 absolute或 fixed。
行内块元素：元素的 display值为 inline-block、table-cell、table-caption等。
Overflow 属性：元素的 overflow值不为 visible，如 hidden、auto、scroll。
弹性或网格布局：元素的 display值为 flex或 inline-flex，以及 grid或 inline-grid。
contain 属性：contain值为 layout、content或 paint等。

## 练习
1. 同样 `width:200px`，对比 `content-box` 与 `border-box` 占位。
2. 用 BFC 解决父元素高度塌陷。

## 通关标准
- 能解释现代项目为什么通常全局设 `border-box`。
