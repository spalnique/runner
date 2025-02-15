import { useSearchParams } from "react-router";

import { useQuickSearch } from "@hooks";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const results = useQuickSearch(searchParams);

  return (
    <ul className="my-10 flex h-[calc(100vh-256px)] overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      {Object.entries(results).map(([key, { content }]) => (
        <li key={key} className="w-1/3">
          <span className="flex items-center justify-center border-b-2 border-b-blue-700 py-3 font-extralight text-gray-700 capitalize shadow-[0_3px_9px_3px_rgba(0,0,0,0.05)]">
            {key}
          </span>
          {content && (
            <ul className="flex h-[calc(100%-48px)] flex-col">
              {content.map((item) => (
                <li
                  key={item.id}
                  className="flex h-1/5 items-center px-6 transition-all hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]"
                >
                  <span className="line-clamp-3">{`${item.name} ${"surname" in item ? item.surname : ""}`}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default SearchResults;
