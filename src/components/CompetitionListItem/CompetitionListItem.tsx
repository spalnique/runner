import { Link } from "react-router";

import { useQueryContext } from "@contexts";
import { Competition } from "@types";

type Props = { competition: Competition };

const CompetitionListItem = ({ competition }: Props) => {
  const { query, id } = useQueryContext();
  const newQuery = new URLSearchParams(query);

  const competitionId = competition.id.toString();
  const isActive = id === competitionId;

  newQuery.set("id", competitionId);

  return (
    <li key={competition.id}>
      <Link
        to={`?${newQuery.toString()}`}
        className={`${isActive ? "shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]" : "shadow-none"} block px-3 py-2 transition-all hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]`}
      >
        <p>{competition.name}</p>
      </Link>
    </li>
  );
};
export default CompetitionListItem;
