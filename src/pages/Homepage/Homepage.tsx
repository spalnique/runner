import { ChangeEventHandler, useMemo } from "react";
import { useSearchParams } from "react-router";

import {
  CompetitionDetails,
  CompetitionList,
  CompetitionSearchInput,
  Pagination,
} from "@components";
import { useCompetitions, useDebounceCall } from "@hooks";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { competitions, meta } = useCompetitions(searchParams);

  const id = searchParams.get("id");
  const text = searchParams.get("text");

  const previewCompetition = useMemo(
    () => (id ? competitions.find((c) => c.id === +id) : null),
    [competitions, id]
  );

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
    <main className="flex grow flex-col gap-5">
      <CompetitionSearchInput
        defaultValue={text ?? ""}
        onChange={debouncedHandleChange}
        autoFocus
      />

      {!!competitions.length && (
        <>
          <div className="flex gap-4">
            <CompetitionList competitions={competitions} />
            {previewCompetition && (
              <CompetitionDetails {...previewCompetition} />
            )}
          </div>
          {meta && <Pagination {...meta} />}
        </>
      )}
    </main>
  );
};
export default Homepage;
