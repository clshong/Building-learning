export {};

interface User {
  id: number;
  name: string;
}

type Permission = {
  roles: string[];
};

type UserWithPermission = User & Permission;

const u: UserWithPermission = { id: 1, name: "Tom", roles: ["admin"] };
console.log(u);
