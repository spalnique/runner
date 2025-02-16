import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCoachById } from "@api";
import { initSingleState } from "@constants";
import { Coach, Content, ResponseState } from "@types";

type QueryState = ResponseState<Content<Coach>>;

export const useCoachById = () => {
  const [searchParams] = useSearchParams();

  const [coach, setCoach] = useState<QueryState>(initSingleState);

  useEffect(() => {
    const coachId = searchParams.get("id");

    if (!coachId) {
      setCoach(initSingleState);
      return;
    }

    setCoach((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getCoachById(coachId)
      .then((data) => {
        setCoach((prev) => ({ ...prev, ...data }));
      })
      .catch((error) => {
        setCoach((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCoach((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return coach;
};
