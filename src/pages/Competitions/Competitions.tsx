import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router";

import {
  CompetitionInfo,
  CompetitionList,
  Pagination,
  SearchInput,
} from "@components";
import { useCompetitions, useDebounceCall } from "@hooks";

const Competitions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { content, meta } = useCompetitions(searchParams);

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
    <main className={`flex grow flex-col gap-5`}>
      <SearchInput
        defaultValue={text ?? ""}
        placeholder="Search by competition name"
        onChange={debouncedHandleChange}
        autoFocus
      />

      {content && (
        <>
          <div className="flex gap-4">
            <CompetitionList competitions={content} />
            {id && <CompetitionInfo />}
          </div>
          {meta && <Pagination {...meta} />}
        </>
      )}
    </main>
  );
};
export default Competitions;
