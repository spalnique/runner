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
  const { text, page, setTextQuery } = useQueryContext();
  const debouncedSetTextQuery = useDebounceCall(setTextQuery);

  const params: QueryParams = { text, page, size: 10 };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    debouncedSetTextQuery(target.value);
  };

  return (
    <Main>
      <Section>
        <SearchInput
          key={text}
          defaultValue={text ?? ''}
          placeholder="Search by coach"
          onChange={handleChange}
          autoFocus
        />

        {text && (
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
