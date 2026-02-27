export {};

function parseJson(input: unknown): { ok: boolean } {
  if (typeof input === "string") {
    const data = JSON.parse(input) as { ok?: boolean };
    return { ok: Boolean(data.ok) };
  }
  throw new Error("input must be string");
}

function assertNever(x: never): never {
  throw new Error(`Unexpected value: ${String(x)}`);
}

type Status = "success" | "failed";
function formatStatus(status: Status): string {
  switch (status) {
    case "success":
      return "ok";
    case "failed":
      return "error";
    default:
      return assertNever(status);
  }
}

console.log(parseJson('{"ok":true}'));
console.log(formatStatus("success"));
