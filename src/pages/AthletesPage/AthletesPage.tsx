import { ChangeEventHandler } from 'react';

import {
  AthletesSearchResults,
  Main,
  SearchInput,
  SearchResultTitle,
  SearchResultWrapper,
  Section,
} from '@components';
import { useQueryContext } from '@contexts';
import { useDebounceCall } from '@hooks';
import { QueryParams } from '@types';

const AthletesPage = () => {
  const { textQuery, pageQuery, setTextQuery } = useQueryContext();

  const params: QueryParams = {
    text: textQuery,
    page: pageQuery,
    size: 20,
  };

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
          placeholder="Search by athlete"
          onChange={debouncedHandleChange}
          autoFocus
        />

        {textQuery && (
          <SearchResultWrapper>
            <SearchResultTitle
              title="Athletes search results"
              className="bg-blue-700 font-medium text-white"
            />
            <AthletesSearchResults
              params={params}
              paginated={params.size > 5}
            />
          </SearchResultWrapper>
        )}
      </Section>
    </Main>
  );
};
export default AthletesPage;
