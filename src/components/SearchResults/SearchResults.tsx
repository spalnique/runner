import {
  MoreResults,
  SearchResultsList,
  SearchResultTitle,
  SearchStatus,
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
  title: string;
};

const SearchResults = ({
  title,
  content,
  loading,
  pagination,
}: SearchResultsProps) => {
  return (
    <div className="divide-y-2 divide-blue-700">
      <SearchResultTitle>{title}</SearchResultTitle>
      <SearchResultsList result={content} />
      {loading ? (
        <SearchStatus status="Searching..." />
      ) : pagination && pagination.totalElements > 5 ? (
        <MoreResults path={title} />
      ) : pagination && pagination.totalElements ? (
        <SearchStatus status="No more results available" />
      ) : (
        <SearchStatus status="Nothing found" />
      )}
    </div>
  );
};
export default SearchResults;
