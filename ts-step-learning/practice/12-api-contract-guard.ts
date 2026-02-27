export {};

type UserDTO = {
  id: number;
  name: string;
  active: boolean;
};

function isUserDTO(input: unknown): input is UserDTO {
  if (typeof input !== "object" || input === null) return false;

  const data = input as Record<string, unknown>;
  return (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.active === "boolean"
  );
}

function parseUserDTO(input: unknown): UserDTO {
  if (!isUserDTO(input)) {
    throw new Error("Invalid UserDTO payload");
  }
  return input;
}

const payload: unknown = JSON.parse('{"id":1,"name":"Tom","active":true}');
const user = parseUserDTO(payload);

console.log(user.id, user.name, user.active);
