import { Link, useSearchParams } from "react-router";

import { Competition } from "@types";

type Props = { competition: Competition };

const CompetitionListItem = ({ competition }: Props) => {
  const [searchParams] = useSearchParams();
  const competitionId = competition.id.toString();

  const isActive = searchParams.get("id") === competitionId;

  const query = new URLSearchParams(searchParams);
  query.set("id", competitionId);

  const to = `?${query.toString()}`;

  return (
    <li key={competition.id}>
      <Link
        to={to}
        className={`${isActive ? "shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]" : "shadow-none"} block px-3 py-2 transition-all hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]`}
      >
        <p>{competition.name}</p>
      </Link>
    </li>
  );
};
export default CompetitionListItem;
