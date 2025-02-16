import { MoreResults, QuickSearchStatus, SearchResultTitle } from "@components";
import { useQuickSearch } from "@hooks";

const QuickSearchResults = () => {
  const results = useQuickSearch();

  return (
    <div className="my-10 flex h-[calc(100vh-260px)] flex-col divide-y-2 divide-blue-700 overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      <ul className="flex divide-x-1 divide-gray-100 shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]">
        {Object.keys(results).map((key) => (
          <li key={key} className="w-1/3">
            <SearchResultTitle text={key} />
          </li>
        ))}
      </ul>
      <ul className="flex h-full divide-x-1 divide-gray-100">
        {Object.entries(results).map(([key, { content }]) => (
          <li key={key} className="w-1/3">
            {content && !!content.length && (
              <ul className="flex h-full flex-col divide-y-1 divide-gray-100">
                {content.map((item) => (
                  <li
                    key={item.id}
                    className="flex h-1/5 items-center px-6 transition-all hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.05)]"
                  >
                    <span className="line-clamp-3">{`${item.name} ${"surname" in item ? item.surname : ""}`}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <ul className="flex divide-x-1 divide-gray-100 shadow-[0_6px_2px_rgba(0,0,0,0.3)]">
        {Object.entries(results).map(([key, { meta, loading }]) => (
          <li key={key} className="w-1/3">
            {loading ? (
              <QuickSearchStatus statusText="Searching..." />
            ) : meta && meta.totalElements > 5 ? (
              <MoreResults path={key} />
            ) : meta && meta.totalElements ? (
              <QuickSearchStatus statusText="No more results available" />
            ) : (
              <QuickSearchStatus statusText="Nothing found" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickSearchResults;
