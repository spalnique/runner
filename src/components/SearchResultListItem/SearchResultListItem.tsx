import { ComponentPropsWithRef } from "react";

import { Entity } from "@types";

type Props<T extends Entity> = ComponentPropsWithRef<"li"> & { item: T };

const SearchResultListItem = <T extends Entity>({ item }: Props<T>) => {
  return (
    <li
      key={item.id}
      className="flex h-10 shrink-0 items-center px-6 transition-all hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.05)]"
    >
      <span className="line-clamp-1">{`${item.name} ${"surname" in item ? item.surname : ""}`}</span>
    </li>
  );
};
export default SearchResultListItem;
