import { SearchResults, SearchResultTitle } from "@components";
import { useQuickSearch } from "@hooks";

const QuickSearchResults = () => {
  const results = useQuickSearch();

  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      <SearchResultTitle
        text="Quick search results"
        className="bg-blue-700 text-white"
      />
      <ul className="flex h-full">
        {Object.entries(results).map(([entity, { content, ...rest }]) => (
          <li key={entity} className="w-1/4 first:w-1/2">
            {!!content.length && (
              <SearchResults entity={entity} content={content} {...rest} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuickSearchResults;
