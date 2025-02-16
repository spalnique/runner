import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthleteById } from "@api";
import { initRequestState } from "@constants";
import { Athlete, ResponseState } from "@types";

export const useAthleteById = () => {
  const [searchParams] = useSearchParams();

  const [athlete, setAthlete] =
    useState<ResponseState<Athlete>>(initRequestState);

  useEffect(() => {
    const competitionId = searchParams.get("id");

    if (!competitionId) {
      setAthlete(initRequestState);
      return;
    }

    setAthlete((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getAthleteById(competitionId)
      .then((data) => {
        setAthlete((prev) => ({ ...prev, content: data }));
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
