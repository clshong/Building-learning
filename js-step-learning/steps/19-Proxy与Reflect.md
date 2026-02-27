# Step 19 Proxy 与 Reflect

目标：掌握对象访问拦截和标准反射操作。

## 关键点
- `Proxy` 可拦截 `get/set/has/deleteProperty` 等
- `Reflect` 提供与语言内部行为一致的默认操作
- 常见用途：校验、日志、权限控制、响应式

## 通关标准
- 你能通过 `set` 拦截实现字段校验。
