import { ComponentPropsWithRef } from "react";

import { SearchResultListItem } from "@components";
import { Entity } from "@types";

type Props<T extends Entity> = ComponentPropsWithRef<"ul"> & {
  result: T[];
};

const SearchResultList = <T extends Entity>({
  result,
  className,
  ...props
}: Props<T>) => {
  return (
    <ul className={`flex h-50 flex-col ${className}`} {...props}>
      {result.map((item) => (
        <SearchResultListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default SearchResultList;
