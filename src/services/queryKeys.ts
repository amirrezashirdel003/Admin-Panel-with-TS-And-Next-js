export const adminKeys = {
  all: ["admin"],
  me: () => [...adminKeys.all, "me"],
};

export const plantsKeys = {
  all: ["plants"],
  lists: () => [...plantsKeys.all, "list"],
  detail: (slug: string) => [...plantsKeys.all, "detail", slug],
};

export const articlesKeys = {
  all: ["articles"],
  lists: () => [...articlesKeys.all, "list"],
  detail: (slug: string) => [...articlesKeys.all, "detail", slug],
};

export const categoriesKeys = {
  all: ["categories"],
  lists: () => [...categoriesKeys.all, "list"],
};
