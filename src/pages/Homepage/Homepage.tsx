import { ChangeEventHandler, MouseEventHandler, useRef, useState } from "react";

import { debounce } from "@helpers";
import { useAllCompetitions } from "@hooks";
import { GetAllParams } from "@types";

const initialParams: GetAllParams = {
  page: 0,
  status: null,
  text: "",
};

// type CurrentPageHandler = (value: number) => void;

const Homepage = () => {
  const [params, setParams] = useState(initialParams);

  const { competitions, meta } = useAllCompetitions(params);

  const { current: updateParamsText } = useRef(
    debounce((input: string) => {
      setParams((prev) => ({ ...prev, text: input }));
    }, 500)
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    updateParamsText(target.value);
  };

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    const value = Number(currentTarget.value);
    setParams((prev) => ({
      ...prev,
      page: prev.page + value,
    }));
  };

  return (
    <main className="flex grow flex-col gap-5 px-8 py-5">
      <input
        className="rounded border-1 border-cyan-900 px-4"
        defaultValue={params.text}
        onChange={handleChange}
        placeholder="Search by competition name"
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
                <button
                  className="w-32 rounded bg-cyan-700 p-2 text-white"
                  onClick={handleCurrentPage}
                  value={-1}
                >
                  Prev page
                </button>
              )}
              {!meta.last && (
                <button
                  className="w-32 rounded bg-cyan-700 p-2 text-white"
                  onClick={handleCurrentPage}
                  value={1}
                >
                  Next page
                </button>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
};
export default Homepage;
