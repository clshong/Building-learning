# Step 08 获取纯净 Object.prototype.toString

目标：在原型被污染时，仍能拿到安全类型判断能力。

## 场景
第三方可能改写：
```js
Object.prototype.toString = function () {
  return "[object Hacked]";
};
```

## 建议做法
- 尽早缓存：
```js
const pureToString = Function.prototype.call.bind(Object.prototype.toString);
```
- 若已污染，可尝试同源 iframe 的干净内建对象。

## 通关标准
- 你能解释“为什么要在应用启动早期缓存”。
