export {};

type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends
  (<T>() => T extends B ? 1 : 2)
    ? true
    : false;

type Expect<T extends true> = T;

type Id<T> = T;
type BoxValue<T> = T extends { value: infer V } ? V : never;

type Case1 = Expect<Equal<Id<string>, string>>;
type Case2 = Expect<Equal<BoxValue<{ value: number }>, number>>;

const ok: Case1 = true;
console.log(ok);

// @ts-expect-error string 不能赋值给 number
const shouldFail: number = "x";
console.log(shouldFail);
