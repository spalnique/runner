import { ComponentPropsWithRef } from "react";

import { getCoaches } from "@api";
import {
  SearchResultList,
  SearchResultTitle,
  SearchStatus,
  ShowMoreResults,
} from "@components";
import { Paths } from "@enums";
import { useFetchEntities } from "@hooks";
import { QueryParams } from "@types";

type Props = ComponentPropsWithRef<"div"> & QueryParams;

const CoachesSearchResults = ({ className, ...params }: Props) => {
  const {
    content,
    pagination: { totalElements },
    loading,
  } = useFetchEntities(getCoaches, params);

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
      <SearchResultTitle title="Coaches" />
      <SearchResultList result={content} />

      {status && <SearchStatus status={status} />}
      {!status && <ShowMoreResults path={Paths.competitions} />}
    </div>
  );
};
export default CoachesSearchResults;
