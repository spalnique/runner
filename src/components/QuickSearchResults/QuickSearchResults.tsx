import {
  AthletesSearchResults,
  CoachesSearchResults,
  CompetitionsSearchResult,
  SearchResultTitle,
  SearchResultWrapper,
} from '@components';
import { useQueryContext } from '@contexts';
import { QueryParams } from '@types';

const QuickSearchResults = () => {
  const { text } = useQueryContext();

  const params: QueryParams = { text, size: 5 };

  return (
    <SearchResultWrapper>
      <SearchResultTitle
        title="Quick search results"
        className="bg-blue-700 font-medium text-white"
      />
      <div className="flex divide-x-1 divide-gray-100">
        <CompetitionsSearchResult params={params} className="w-1/2" />
        <AthletesSearchResults params={params} className="w-1/4" />
        <CoachesSearchResults params={params} className="w-1/4" />
      </div>
    </SearchResultWrapper>
  );
};
export default QuickSearchResults;
