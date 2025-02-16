import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthleteById } from "@api";
import { initSingleState } from "@constants";
import { Athlete, Content, ResponseState } from "@types";

type QueryState = ResponseState<Content<Athlete>>;

export const useAthleteById = () => {
  const [searchParams] = useSearchParams();

  const [athlete, setAthlete] = useState<QueryState>(initSingleState);

  useEffect(() => {
    const competitionId = searchParams.get("id");

    if (!competitionId) {
      setAthlete(initSingleState);
      return;
    }

    setAthlete((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getAthleteById(competitionId)
      .then((data) => {
        setAthlete((prev) => ({ ...prev, ...data }));
      })
      .catch((error) => {
        setAthlete((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setAthlete((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return athlete;
};
