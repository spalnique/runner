import { Link, useSearchParams } from "react-router";

type MoreResultsProps = { path: string };

const MoreResults = ({ path }: MoreResultsProps) => {
  const [searchParams] = useSearchParams();

  return (
    <Link
      to={`/${path}?${searchParams.toString()}`}
      className="flex w-full items-center justify-center bg-blue-700 py-3 font-extralight text-white transition-all hover:bg-blue-600 hover:font-normal hover:text-white"
    >
      See more results
    </Link>
  );
};
export default MoreResults;
