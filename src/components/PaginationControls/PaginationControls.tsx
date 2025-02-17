import { MouseEventHandler } from "react";

import { Button } from "@components";
import { useQueryContext } from "@contexts";
import { Pagination } from "@types";

const PaginationControls = ({ number, first, last }: Pagination) => {
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
    <>
      <div className="flex gap-8 self-center">
        {!first && (
          <Button text="Prev page" value={-1} onClick={handleCurrentPage} />
        )}
        {!last && (
          <Button text="Next page" value={1} onClick={handleCurrentPage} />
        )}
      </div>
    </>
  );
};
export default PaginationControls;
