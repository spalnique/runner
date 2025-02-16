import { ComponentPropsWithRef } from "react";

import { getCoaches } from "@api";
import {
  MoreResults,
  SearchResultsList,
  SearchResultTitle,
  SearchStatus,
} from "@components";
import { useFetchEntities } from "@hooks";
import { QueryParams } from "@types";

type Props = ComponentPropsWithRef<"div"> & { params: QueryParams };

const CoachesSearchResults = ({ className, params }: Props) => {
  const { content, pagination, loading } = useFetchEntities(getCoaches, params);

  const total = pagination.totalElements;

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      <SearchResultTitle>Competitions</SearchResultTitle>
      <SearchResultsList result={content} />
      {loading ? (
        <SearchStatus status="Searching..." />
      ) : (
        <>
          {total === 0 && <SearchStatus status="Nothing found" />}
          {total <= 5 && <SearchStatus status="No more results available" />}
          {total > 5 && <MoreResults path="competitions" />}
        </>
      )}
    </div>
  );
};
export default CoachesSearchResults;
