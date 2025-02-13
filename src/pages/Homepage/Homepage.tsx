import { ChangeEventHandler, MouseEventHandler } from "react";

import { CompetitionSearchInput, PageButton } from "@components";
import { useAllCompetitions, useDebounceCall } from "@hooks";

const Homepage = () => {
  console.log("Rendering Homepage...");

  const { competitions, meta, params, setSearchParams } = useAllCompetitions();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: "0",
      text: event.target.value,
    }));
  };

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = (event) => {
    setSearchParams((prev) => ({
      ...Object.fromEntries(prev.entries()),
      page: `${parseInt(prev.get("page") ?? "0") + Number(event.currentTarget.value)}`,
    }));
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <main className="flex grow flex-col gap-5 px-8 py-5">
      <CompetitionSearchInput
        defaultValue={params?.text ?? ""}
        onChange={debouncedHandleChange}
        autoFocus
      />

      {!!competitions.length && (
        <>
          <ul
            style={{
              height: "calc(100vh - 2 * 64px - 146px)",
              overflowY: "auto",
            }}
          >
            {competitions.map((competition) => (
              <li key={competition.id}>
                <p>{competition.name}</p>
                <p>{competition.status}</p>
              </li>
            ))}
          </ul>
          {meta && (
            <div className="flex gap-8 self-center">
              {!meta.first && (
                <PageButton value={-1} onClick={handleCurrentPage}>
                  Prev page
                </PageButton>
              )}
              {!meta.last && (
                <PageButton value={1} onClick={handleCurrentPage}>
                  Next page
                </PageButton>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
};
export default Homepage;
