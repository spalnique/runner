import { Link } from "react-router";

import { useQueryContext } from "@contexts";
import { Routes } from "@enums";

type Props = { path: Routes };

const ShowMoreResults = ({ path }: Props) => {
  const { query } = useQueryContext();

  return (
    <Link
      to={`/${path}?${query}`}
      className="flex w-full items-center justify-center bg-blue-700 py-3 font-extralight text-white transition-all hover:bg-blue-600 hover:font-normal hover:text-white"
    >
      See more results
    </Link>
  );
};
export default ShowMoreResults;
