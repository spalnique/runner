import { HTMLAttributes } from "react";
import { useSearchParams } from "react-router";

import { CompetitionListItem } from "@components";
import { Competition } from "@types";

type CompetitionListProps = HTMLAttributes<HTMLUListElement> & {
  competitions: Competition[];
};

const CompetitionList = ({ competitions, ...props }: CompetitionListProps) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return (
    <ul
      className={`flex h-[calc(100vh-64px-64px-146px)] ${id ? "w-80" : "w-full"} grow flex-col gap-1 overflow-y-scroll px-2 py-2`}
      {...props}
    >
      {competitions.map((competition) => (
        <CompetitionListItem key={competition.id} competition={competition} />
      ))}
    </ul>
  );
};
export default CompetitionList;
