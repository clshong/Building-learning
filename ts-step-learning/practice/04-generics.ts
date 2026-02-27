export {};

function identity<T>(v: T): T {
  return v;
}

function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const out = {} as Pick<T, K>;
  keys.forEach((k) => {
    out[k] = obj[k];
  });
  return out;
}

const user = { id: 1, name: "A", age: 18 };
console.log(identity(user));
console.log(pick(user, ["id", "name"]));
