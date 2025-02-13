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

  const { competitions, meta } = useCompetitions(searchParams);

  const id = searchParams.get("id");
  const text = searchParams.get("text");
  const page = meta?.number ? meta.number : 1;

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

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    setSearchParams((prev) => {
      const newPage = +currentTarget.value + page;

      if (newPage === 1) {
        prev.delete("page");
        return prev;
      }

      prev.set("page", `${newPage}`);
      return prev;
    });
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <main className="flex grow flex-col gap-5 px-8 py-5">
      <CompetitionSearchInput
        defaultValue={text ?? ""}
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
