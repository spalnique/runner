import { useSearchParams } from "react-router";

import { useQuickSearch } from "@hooks";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const results = useQuickSearch(searchParams);

  return (
    <ul className="my-[50px_0] flex divide-x-1 divide-gray-100 rounded-2xl bg-white py-5 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      {Object.entries(results).map(([key, { content }]) => (
        <li key={key} className="w-1/3 px-6">
          <span className="capitalize">{key}</span>
          {content && (
            <ul className="flex flex-col divide-y-1 divide-gray-100">
              {content.map((item) => (
                <li key={item.id} className="py-3">
                  {`${item.name} ${"surname" in item ? item.surname : ""}`}
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
