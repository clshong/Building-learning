export {};

// 模拟把 JS 工具函数迁移到 TS

export function toCurrency(value: number, symbol = "$"): string {
  return `${symbol}${value.toFixed(2)}`;
}

console.log(toCurrency(3.5));
