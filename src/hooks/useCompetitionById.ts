import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitionById } from "@api";
import { initSingleState } from "@constants";
import { Competition, Content, ResponseState } from "@types";

type QueryState = ResponseState<Content<Competition>>;

export const useCompetitionById = () => {
  const [searchParams] = useSearchParams();

  const [competition, setCompetition] = useState<QueryState>(initSingleState);

  useEffect(() => {
    const competitionId = searchParams.get("id");

    if (!competitionId) {
      setCompetition(initSingleState);
      return;
    }

    setCompetition((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getCompetitionById(competitionId)
      .then((data) => {
        setCompetition((prev) => ({ ...prev, ...data }));
      })
      .catch((error) => {
        setCompetition((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCompetition((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return competition;
};
