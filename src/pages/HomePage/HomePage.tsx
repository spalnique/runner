import { ChangeEventHandler } from 'react';

import { Main, QuickSearchResults, SearchInput, Section } from '@components';
import { useQueryContext } from '@contexts';
import { useDebounceCall } from '@hooks';

const HomePage = () => {
  const { text, setTextQuery } = useQueryContext();

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    target.value = target.value.trimStart();

    setTextQuery(target.value);
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <Main>
      <Section>
        <SearchInput
          key={text}
          defaultValue={text ?? ''}
          placeholder="Quick search by competition, athlete or coach"
          onChange={debouncedHandleChange}
          autoFocus
        />
        {text && <QuickSearchResults />}
      </Section>
    </Main>
  );
};
export default HomePage;
