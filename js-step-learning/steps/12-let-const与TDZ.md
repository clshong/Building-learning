# Step 12 let/const 与 TDZ

目标：理解块级作用域和暂时性死区（TDZ）。

## 关键点
- `let/const` 有块级作用域。
- 声明前访问会报 `ReferenceError`（TDZ）。
- `const` 不能重新赋值，但对象内容可变。

## 示例
```js
{
  // console.log(a); // ReferenceError
  let a = 1;
}

const obj = { n: 1 };
obj.n = 2; // 合法
```

## 通关标准
- 你能解释 `var` 与 `let/const` 在提升行为上的差异。
