import {
  AthletesSearchResults,
  CoachesSearchResults,
  CompetitionsSearchResults,
  SearchResultsWrapper,
  SearchResultTitle,
} from "@components";

const QuickSearchResults = () => {
  return (
    <SearchResultsWrapper>
      <SearchResultTitle className="bg-blue-700 font-medium text-white">
        Quick search results
      </SearchResultTitle>
      <div className="flex divide-x-1 divide-gray-100">
        <CompetitionsSearchResults className="w-1/2" />
        <AthletesSearchResults className="w-1/4" />
        <CoachesSearchResults className="w-1/4" />
      </div>
    </SearchResultsWrapper>
  );
};
export default QuickSearchResults;
