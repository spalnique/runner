import { ChangeEventHandler } from "react";

import { Main, SearchInput, Section } from "@components";
import { useQueryContext } from "@contexts";
import { useDebounceCall } from "@hooks";

const Competitions = () => {
  const { textQuery, setTextQuery } = useQueryContext();

  // const { content, pagination } = useCompetitions();

  // const id = searchParams.get("id");

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTextQuery(target.value);
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <Main>
      <Section>
        <SearchInput
          key={textQuery}
          defaultValue={textQuery ?? ""}
          placeholder="Search by competition name"
          onChange={debouncedHandleChange}
          autoFocus
        />

        {/* {
          <>
            <div className="flex gap-4">
              <SearchResultsList result={content} />
              {id && <CompetitionInfo />}
            </div>
            {pagination && <PaginationControls {...pagination} />}
          </>
        } */}
      </Section>
    </Main>
  );
};
export default Competitions;
