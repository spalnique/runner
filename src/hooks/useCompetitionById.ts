import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthleteById } from "@api";
import { initRequestState } from "@constants";
import { Competition, ResponseState } from "@types";

export const useCompetitionById = () => {
  const [searchParams] = useSearchParams();

  const [competition, setCompetition] =
    useState<ResponseState<Competition>>(initRequestState);

  useEffect(() => {
    const competitionId = searchParams.get("id");

    if (!competitionId) {
      setCompetition(initRequestState);
      return;
    }

    setCompetition((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getAthleteById(competitionId)
      .then((data) => {
        setCompetition((prev) => ({ ...prev, content: data }));
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
