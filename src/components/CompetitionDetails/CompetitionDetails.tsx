import { MouseEventHandler } from "react";
import { useSearchParams } from "react-router";

import { useCompetitionById } from "@hooks";

const CompetitionDetails = () => {
  const [_, setSearchParams] = useSearchParams();
  const { competition } = useCompetitionById();

  const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchParams((prev) => {
      prev.delete("id");
      return prev;
    });
  };

  return (
    <div className="w-[400px] self-stretch bg-amber-500">
      {competition?.name}
      <button type="button" onClick={handleClose}>
        Close details
      </button>
    </div>
  );
};
export default CompetitionDetails;
