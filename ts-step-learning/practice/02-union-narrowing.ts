export {};

function formatId(id: string | number): string {
  if (typeof id === "number") return id.toFixed(0);
  return id.trim();
}

console.log(formatId(100), formatId("  x-1 "));
