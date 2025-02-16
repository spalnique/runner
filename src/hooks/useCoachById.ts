import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCoachById } from "@api";
import { initRequestState } from "@constants";
import { Coach, ResponseState } from "@types";

export const useCoachById = () => {
  const [searchParams] = useSearchParams();

  const [coach, setCoach] = useState<ResponseState<Coach>>(initRequestState);

  useEffect(() => {
    const coachId = searchParams.get("id");

    if (!coachId) {
      setCoach(initRequestState);
      return;
    }

    setCoach((prev) => ({
      ...prev,
      error: false,
      loading: true,
    }));

    getCoachById(coachId)
      .then((data) => {
        setCoach((prev) => ({ ...prev, content: data }));
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
