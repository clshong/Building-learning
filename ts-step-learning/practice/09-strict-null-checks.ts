export {};

type User = { name?: string };

function getName(user: User): string {
  return user.name ?? "anonymous";
}

console.log(getName({ name: "A" }));
console.log(getName({}));
