import { NavLink, useSearchParams } from "react-router";

import { Competition } from "@types";

type CompetitionListItemProps = { competition: Competition };

const CompetitionListItem = ({ competition }: CompetitionListItemProps) => {
  const [searchParams] = useSearchParams();

  const query = new URLSearchParams(searchParams);

  query.set("id", `${competition.id}`);

  return (
    <li key={competition.id}>
      <NavLink to={`?${query.toString()}`}>
        <p>{competition.name}</p>
        <p>{competition.status}</p>
      </NavLink>
    </li>
  );
};
export default CompetitionListItem;
