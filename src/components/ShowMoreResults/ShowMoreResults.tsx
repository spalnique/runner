import { Link } from "react-router";

import { useQueryContext } from "@contexts";
import { Paths } from "@enums";

type Props = { path: Paths };

const ShowMoreResults = ({ path }: Props) => {
  const { query } = useQueryContext();

  return (
    <Link
      to={`/${path}?${query}`}
      className="flex h-12 w-full items-center justify-center bg-blue-700 font-extralight text-white transition-all hover:bg-blue-600 hover:font-normal hover:text-white"
    >
      See more results
    </Link>
  );
};
export default ShowMoreResults;
