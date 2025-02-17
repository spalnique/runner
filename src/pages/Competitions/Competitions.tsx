import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router";

import {
  CompetitionInfo,
  Main,
  PaginationControls,
  SearchInput,
  SearchResultsList,
  Section,
} from "@components";
import { useCompetitions, useDebounceCall } from "@hooks";

const Competitions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { content, pagination } = useCompetitions();

  const id = searchParams.get("id");
  const text = searchParams.get("text");

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setSearchParams((prev) => {
      if (!target.value) {
        prev.delete("text");
        prev.delete("page");
        return prev;
      }

      prev.set("text", target.value);
      prev.delete("page");

      return prev;
    });
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <Main>
      <Section>
        <SearchInput
          key={text}
          defaultValue={text ?? ""}
          placeholder="Search by competition name"
          onChange={debouncedHandleChange}
          autoFocus
        />

        {
          <>
            <div className="flex gap-4">
              <SearchResultsList result={content} />
              {id && <CompetitionInfo />}
            </div>
            {pagination && <PaginationControls {...pagination} />}
          </>
        }
      </Section>
    </Main>
  );
};
export default Competitions;
