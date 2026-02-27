export {};

type MyReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
type ElementType<T> = T extends (infer U)[] ? U : never;

function fn() {
  return { ok: true };
}

type FnResult = MyReturnType<typeof fn>;
type Item = ElementType<number[]>;

const a: FnResult = { ok: true };
const b: Item = 1;
console.log(a, b);
