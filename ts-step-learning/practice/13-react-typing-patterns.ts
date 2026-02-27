export {};

type AsyncState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => string;
};

function renderList<T>(props: ListProps<T>): string[] {
  return props.items.map((item, index) => props.renderItem(item, index));
}

const state: AsyncState<{ id: number; name: string }[]> = {
  status: "success",
  data: [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ],
};

if (state.status === "success") {
  const lines = renderList({
    items: state.data,
    renderItem: (item) => `${item.id}-${item.name}`,
  });
  console.log(lines);
}
