# Step 07 Symbol.toStringTag

目标：掌握如何自定义 `Object.prototype.toString` 的标签。

## 关键点
- `Object.prototype.toString.call(x)` 默认返回 `[object Type]`。
- 可通过 `Symbol.toStringTag` 自定义 `Type`。

## 示例
```js
class Course {}
Course.prototype[Symbol.toStringTag] = "Course";

console.log(Object.prototype.toString.call(new Course()));
// [object Course]
```

## 通关标准
- 你能自定义一个类的 toString 标签并验证。
