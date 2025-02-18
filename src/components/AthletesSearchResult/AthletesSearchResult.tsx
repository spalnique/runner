import { ComponentPropsWithRef } from "react";

import { getAthletes } from "@api";
import {
  MoreResults,
  SearchResultList,
  SearchResultTitle,
  SearchStatus,
} from "@components";
import { useFetchEntities } from "@hooks";
import { QueryParams } from "@types";

type Props = ComponentPropsWithRef<"div"> & { params: QueryParams };

const AthletesSearchResults = ({ className, params }: Props) => {
  const { content, pagination, loading } = useFetchEntities(
    getAthletes,
    params
  );

  const total = pagination.totalElements;

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      <SearchResultTitle>Athletes</SearchResultTitle>
      <SearchResultList result={content} />
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
export default AthletesSearchResults;
