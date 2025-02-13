import { NavLink, useLocation, useSearchParams } from "react-router";

import { Competition } from "@types";

type CompetitionListItemProps = { competition: Competition };

const CompetitionListItem = ({ competition }: CompetitionListItemProps) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  searchParams.set("id", competition.id.toString());
  console.log(`${pathname}?${searchParams.toString()}`);
  return (
    <li key={competition.id}>
      <NavLink to={`${pathname}?${searchParams.toString()}`}>
        <p>{competition.name}</p>
        <p>{competition.status}</p>
      </NavLink>
    </li>
  );
};
export default CompetitionListItem;
