import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitionById } from "@api";
import { initResponseState } from "@constants";
import { Competition, ResponseState } from "@types";

export const useCompetitionById = () => {
  const [searchParams] = useSearchParams();

  const competitionId = searchParams.get("id") ?? null;

  const [competition, setCompetition] =
    useState<ResponseState<Competition>>(initResponseState);

  useEffect(() => {
    (async () => {
      if (!competitionId) return;

      try {
        setCompetition((prev) => ({
          ...prev,
          error: false,
          loading: true,
        }));

        const data = await getCompetitionById(competitionId);

        setCompetition((prev) => ({
          ...prev,
          content: data,
        }));
      } catch (error) {
        setCompetition((prev) => ({ ...prev, error: true }));
        console.error(error);
      } finally {
        setCompetition((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [competitionId]);

  return competition;
};
