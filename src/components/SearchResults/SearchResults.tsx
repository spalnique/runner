import {
  MoreResults,
  SearchResultsList,
  SearchResultStatus,
  SearchResultTitle,
} from "@components";
import {
  Athlete,
  Coach,
  Competition,
  ContentArray,
  ResponseState,
} from "@types";

type SearchResultsProps = ResponseState<
  ContentArray<Competition | Athlete | Coach>
> & {
  entity: string;
};

const SearchResults = ({
  entity,
  content,
  loading,
  pagination,
}: SearchResultsProps) => {
  console.log("render list");
  return (
    <div className="divide-x-1 divide-gray-100">
      <SearchResultTitle text={entity} />
      <SearchResultsList result={content} />
      {loading ? (
        <SearchResultStatus statusText="Searching..." />
      ) : pagination && pagination.totalElements > 5 ? (
        <MoreResults path={entity} />
      ) : pagination && pagination.totalElements ? (
        <SearchResultStatus statusText="No more results available" />
      ) : (
        <SearchResultStatus statusText="Nothing found" />
      )}
    </div>
  );
};
export default SearchResults;
