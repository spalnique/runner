import { ChangeEventHandler, MouseEventHandler } from "react";
import { useSearchParams } from "react-router";

import {
  CompetitionDetails,
  CompetitionList,
  CompetitionSearchInput,
  PageButton,
} from "@components";
import { useCompetitions, useDebounceCall } from "@hooks";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const text = searchParams.get("text") ?? "";

  const { competitions, meta } = useCompetitions();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchParams((prev) => {
      console.log(prev.get("id"));
      prev.set("page", "0");
      prev.set("text", event.target.value);
      return prev;
    });
  };

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = (event) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      const currentPage = parseInt(newParams.get("page") ?? "0");
      newParams.set(
        "page",
        (currentPage + Number(event.currentTarget.value)).toString()
      );
      return newParams;
    });
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <main className="flex grow flex-col gap-5 px-8 py-5">
      <CompetitionSearchInput
        defaultValue={text}
        onChange={debouncedHandleChange}
        autoFocus
      />

      {!!competitions.length && (
        <>
          <div className="flex gap-4">
            <CompetitionList competitions={competitions} />
            {id && <CompetitionDetails />}
          </div>
          {meta && (
            <div className="flex gap-8 self-center">
              {!meta.first && (
                <PageButton
                  text="Prev page"
                  value={-1}
                  onClick={handleCurrentPage}
                />
              )}
              {!meta.last && (
                <PageButton
                  text="Next page"
                  value={1}
                  onClick={handleCurrentPage}
                />
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
};
export default Homepage;
