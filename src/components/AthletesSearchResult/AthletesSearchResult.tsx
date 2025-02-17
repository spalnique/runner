import { ComponentPropsWithRef } from "react";

import { getAthletes } from "@api";
import {
  MoreResults,
  SearchResultsList,
  SearchResultTitle,
  SearchStatus,
} from "@components";
import { useFetchEntities } from "@hooks";

type AthletesSearchResultsProps = ComponentPropsWithRef<"div">;

const AthletesSearchResults = ({ className }: AthletesSearchResultsProps) => {
  console.log("render list");

  const { content, pagination, loading } = useFetchEntities(getAthletes);

  const total = pagination.totalElements;

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      <SearchResultTitle>Athletes</SearchResultTitle>
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
export default AthletesSearchResults;
