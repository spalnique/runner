import { ComponentPropsWithRef } from "react";

import {
  MoreResults,
  SearchResultsList,
  SearchResultTitle,
  SearchStatus,
} from "@components";
import { useCompetitions } from "@hooks";

type CompetitionsSearchResultsProps = ComponentPropsWithRef<"div">;

const CompetitionsSearchResults = ({
  className,
}: CompetitionsSearchResultsProps) => {
  const { content, pagination, loading } = useCompetitions();

  const total = pagination.totalElements;

  return (
    <div className={`divide-y-2 divide-blue-700 ${className}`}>
      <SearchResultTitle>Competitions</SearchResultTitle>
      <SearchResultsList result={content} />
      {loading ? (
        <SearchStatus status="Searching..." />
      ) : (
        <>
          {total === 0 ||
            (total <= 5 && (
              <SearchStatus
                status={!total ? "Nothing found" : "No more results available"}
              />
            ))}
          {total > 5 && <MoreResults path="competitions" />}
        </>
      )}
    </div>
  );
};
export default CompetitionsSearchResults;
