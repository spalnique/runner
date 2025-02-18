import { ChangeEventHandler } from 'react';

import {
  CoachesSearchResults,
  Main,
  SearchInput,
  SearchResultTitle,
  SearchResultWrapper,
  Section,
} from '@components';
import { useQueryContext } from '@contexts';
import { useDebounceCall } from '@hooks';
import { QueryParams } from '@types';

const CoachesPage = () => {
  const { textQuery, setTextQuery } = useQueryContext();

  const params: QueryParams = { text: textQuery, size: 20 };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTextQuery(target.value);
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <Main>
      <Section>
        <SearchInput
          key={textQuery}
          defaultValue={textQuery ?? ''}
          placeholder="Search by coach"
          onChange={debouncedHandleChange}
          autoFocus
        />

        {textQuery && (
          <SearchResultWrapper>
            <SearchResultTitle
              title="Coach search results"
              className="bg-blue-700 font-medium text-white"
            />
            <CoachesSearchResults params={params} paginated={params.size > 5} />
          </SearchResultWrapper>
        )}
      </Section>
    </Main>
  );
};
export default CoachesPage;
