import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitionById } from "@api";
import { Competition } from "@types";

type Response = {
  competition: Competition | null;
  error: boolean;
  loading: boolean;
};

export const useCompetitionById = () => {
  const [searchParams] = useSearchParams();

  const competitionId = searchParams.get("id") ?? null;

  const [response, setResponse] = useState<Response>({
    competition: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    (async () => {
      if (!competitionId) return;

      try {
        setResponse((prev) => ({
          ...prev,
          error: false,
          loading: true,
        }));

        const competition = await getCompetitionById(competitionId);

        setResponse((prev) => ({
          ...prev,
          competition,
        }));
      } catch (error) {
        setResponse((prev) => ({ ...prev, error: true }));
        console.error(error);
      } finally {
        setResponse((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [competitionId]);

  return response;
};
