export {};

type UserA = { id: number; name: string };
type UserB = { id: number; name: string };

const a: UserA = { id: 1, name: "A" };
const b: UserB = a;

console.log(a, b);
