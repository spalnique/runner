import { Link, useSearchParams } from "react-router";

import { useQuickSearch } from "@hooks";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const results = useQuickSearch();
  console.log(results);

  return (
    <div className="my-10 flex h-[calc(100vh-260px)] flex-col divide-y-2 divide-blue-700 overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      <ul className="flex divide-x-1 divide-gray-100">
        {Object.keys(results).map((key) => (
          <li key={key} className="w-1/3">
            <span className="flex items-center justify-center py-3 font-extralight text-gray-700 capitalize">
              {key}
            </span>
          </li>
        ))}
      </ul>
      <ul className="flex h-full divide-x-1 divide-gray-100">
        {Object.entries(results).map(([key, { content }]) => (
          <li key={key} className="w-1/3">
            {content && (
              <>
                <ul className="flex h-full flex-col divide-y-1 divide-gray-100">
                  {content.map((item) => (
                    <li
                      key={item.id}
                      className="flex h-1/5 items-center px-6 transition-all hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]"
                    >
                      <span className="line-clamp-3">{`${item.name} ${"surname" in item ? item.surname : ""}`}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
      <ul className="flex divide-x-1 divide-gray-100">
        {Object.entries(results).map(([key, { content, meta, loading }]) => (
          <li key={key} className="w-1/3">
            {loading ? (
              <span className="flex items-center justify-center py-3 font-extralight text-gray-700">
                Searching...
              </span>
            ) : meta && meta.totalElements > 5 ? (
              <Link
                to={`/${key}?${searchParams.toString()}`}
                className="flex w-full items-center justify-center bg-blue-700 py-3 font-extralight text-white transition-all hover:bg-blue-600 hover:font-normal hover:text-white"
              >
                See more results
              </Link>
            ) : !content ? (
              <span className="flex items-center justify-center py-3 font-extralight text-gray-700">
                Nothing found
              </span>
            ) : (
              <span className="flex items-center justify-center py-3 font-extralight text-gray-700">
                No more results available
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchResults;
