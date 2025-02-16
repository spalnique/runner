import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes } from "@api";
import { initRequestState } from "@constants";
import { Athlete, ResponseState } from "@types";

export const useAthletes = () => {
  const [searchParams] = useSearchParams();
  const [athletes, setAthletes] =
    useState<ResponseState<Athlete[]>>(initRequestState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setAthletes((prev) => ({ ...prev, loading: true }));

    getAthletes(params)
      .then(({ content, ...responseMeta }) => {
        setAthletes((prev) => ({ ...prev, content, meta: responseMeta }));
      })
      .catch((error) => {
        setAthletes((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setAthletes((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return athletes;
};
