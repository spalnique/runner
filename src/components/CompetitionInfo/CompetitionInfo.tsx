import { MouseEventHandler } from "react";

import { getCompetitionById } from "@api";
import { Button } from "@components";
import { useQueryContext } from "@contexts";
import { useFetchEntityById } from "@hooks";
import { Competition, Content, ResponseState } from "@types";

const CompetitionInfo = () => {
  const { setIdQuery } = useQueryContext();
  const { content } = useFetchEntityById(getCompetitionById) as ResponseState<
    Content<Competition>
  >;

  const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
    setIdQuery();
  };

  return (
    <>
      {content && (
        <>
          <div className="my-2 flex w-[60%] flex-col justify-between px-4 py-4 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-2">
              <span>{content.name}</span>
              <span>Статус: {content.status}</span>
              <span>Початок змагань: {content.beginDate}</span>
              <span>Останній день змагань: {content.endDate}</span>
            </div>
            <Button
              text="Close preview"
              onClick={handleClose}
              className="self-center"
            ></Button>
          </div>
        </>
      )}
    </>
  );
};
export default CompetitionInfo;
