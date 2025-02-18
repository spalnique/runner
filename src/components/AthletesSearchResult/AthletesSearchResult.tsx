import { ComponentPropsWithRef } from "react";

import { getAthletes } from "@api";
import {
  SearchResultList,
  SearchResultTitle,
  SearchStatus,
  ShowMoreResults,
} from "@components";
import { Routes } from "@enums";
import { useFetchEntities } from "@hooks";
import { QueryParams } from "@types";

type Props = ComponentPropsWithRef<"div"> & { params: QueryParams };

const AthletesSearchResults = ({ className, params }: Props) => {
  const {
    content,
    pagination: { totalElements },
    loading,
  } = useFetchEntities(getAthletes, params);

  let status: string;

  if (loading) {
    status = "Searching...";
  } else {
    status = !totalElements
      ? "Nothing found"
      : totalElements <= 5
        ? "No more results available"
        : "";
  }

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      <SearchResultTitle title="Athletes" />
      <SearchResultList result={content} />

      {status && <SearchStatus status={status} />}
      {!status && <ShowMoreResults path={Routes.competitions} />}
    </div>
  );
};
export default AthletesSearchResults;
