import { HTMLAttributes } from "react";

import { Athlete, Coach, Competition } from "@types";

type Props = HTMLAttributes<HTMLUListElement> & {
  result: (Athlete | Competition | Coach)[];
};

const SearchResultsList = ({ result, className, ...Props }: Props) => {
  return (
    <ul className={`flex h-50 flex-col ${className}`} {...Props}>
      {result.map((item) => (
        <li
          key={item.id}
          className="flex h-12 items-center px-6 transition-all hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.05)]"
        >
          <span className="line-clamp-1">{`${item.name} ${"surname" in item ? item.surname : ""}`}</span>
        </li>
      ))}
    </ul>
  );
};
export default SearchResultsList;
