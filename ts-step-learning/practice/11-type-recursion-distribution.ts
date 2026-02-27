export {};

type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;

type ToArray<T> = T extends unknown ? T[] : never;

type Input = {
  user: {
    name: string;
    tags: string[];
  };
};

type Output = DeepReadonly<Input>;
type Distributed = ToArray<string | number>;

const data: Output = {
  user: { name: "Tom", tags: ["ts", "react"] },
};

const arr1: Distributed = ["a"];
const arr2: Distributed = [1];

console.log(data.user.name, arr1, arr2);
