import { ComponentPropsWithRef } from "react";

import { getCompetitions } from "@api";
import {
  PaginationControls,
  SearchResultList,
  SearchResultTitle,
  SearchStatus,
  ShowMoreResults,
} from "@components";
import { Paths } from "@enums";
import { useFetchEntities } from "@hooks";
import { QueryParams } from "@types";

type Props = ComponentPropsWithRef<"div"> & {
  params: QueryParams;
  paginated?: boolean;
};

const CompetitionsSearchResult = ({
  className = "",
  params,
  paginated = false,
}: Props) => {
  const { content, pagination, loading } = useFetchEntities(
    getCompetitions,
    params
  );

  let status: string;

  if (loading) {
    status = "Searching...";
  } else {
    status = !pagination.totalElements
      ? "Nothing found"
      : pagination.totalElements <= 5
        ? "No more results available"
        : "";
  }

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      {!paginated && <SearchResultTitle title="Competitions" />}
      <SearchResultList result={content} />

      {status && <SearchStatus status={status} />}
      {!status && paginated && <PaginationControls {...pagination} />}
      {!status && !paginated && <ShowMoreResults path={Paths.competitions} />}
    </div>
  );
};
export default CompetitionsSearchResult;
