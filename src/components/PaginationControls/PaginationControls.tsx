import { MouseEventHandler } from "react";

import { Button } from "@components";
import { useQueryContext } from "@contexts";
import { Pagination } from "@types";

type PaginationControlsProps = Pagination;

const PaginationControls = ({
  number,
  first,
  last,
}: PaginationControlsProps) => {
  const { setPageQuery } = useQueryContext();

  const page = number ? number : 1;

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    const newPage = +currentTarget.value + page;

    if (newPage === 1) {
      setPageQuery();
      return;
    }

    setPageQuery(newPage);
  };
  return (
    <div className="flex h-12 divide-x-1 divide-gray-100 self-center">
      {!first && (
        <Button
          text="Prev page"
          value={-1}
          onClick={handleCurrentPage}
          className="grow"
        />
      )}
      {!last && (
        <Button
          text="Next page"
          value={1}
          onClick={handleCurrentPage}
          className="grow"
        />
      )}
    </div>
  );
};
export default PaginationControls;
