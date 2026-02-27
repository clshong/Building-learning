export {};

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type User = { id: number; name: string };

const p: MyPartial<User> = { name: "Tom" };
const r: MyReadonly<User> = { id: 1, name: "A" };
console.log(p, r);
