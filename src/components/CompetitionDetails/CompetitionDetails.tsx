import { MouseEventHandler } from "react";
import { useSearchParams } from "react-router";

import { Button } from "@components";
import { Competition } from "@types";

const CompetitionDetails = (competition: Competition) => {
  const [_, setSearchParams] = useSearchParams();

  const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchParams((prev) => {
      prev.delete("id");
      return prev;
    });
  };

  return (
    <>
      {competition && (
        <div className="my-2 flex w-[60%] flex-col justify-between px-4 py-4 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-2">
            <span>{competition.name}</span>
            <span>Статус: {competition.status}</span>
            <span>Початок змагань: {competition.beginDate}</span>
            <span>Останній день змагань: {competition.endDate}</span>
          </div>

          <Button
            text="Close preview"
            onClick={handleClose}
            className="self-center"
          ></Button>
        </div>
      )}
    </>
  );
};
export default CompetitionDetails;
