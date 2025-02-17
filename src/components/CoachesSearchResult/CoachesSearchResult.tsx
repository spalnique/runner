import { ComponentPropsWithRef } from "react";

import {
  MoreResults,
  SearchResultsList,
  SearchResultTitle,
  SearchStatus,
} from "@components";
import { useCoaches } from "@hooks";

type CompetitionSearchResultsProps = ComponentPropsWithRef<"div">;

const CompetitionsSearchResults = ({
  className,
}: CompetitionSearchResultsProps) => {
  const { content, pagination, loading } = useCoaches();

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
export default CompetitionsSearchResults;
