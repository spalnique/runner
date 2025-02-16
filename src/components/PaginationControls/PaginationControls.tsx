import { MouseEventHandler } from "react";
import { useSearchParams } from "react-router";

import { Button } from "@components";
import { Pagination } from "@types";

const PaginationControls = ({ number, first, last }: Pagination) => {
  const [_searchParams, setSearchParams] = useSearchParams();

  const page = number ? number : 1;

  const handleCurrentPage: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget,
  }) => {
    setSearchParams((prev) => {
      const newPage = +currentTarget.value + page;

      if (newPage === 1) {
        prev.delete("page");
        return prev;
      }

      prev.set("page", `${newPage}`);
      return prev;
    });
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
