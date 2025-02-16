import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitions } from "@api";
import { initRequestState } from "@constants";
import { Competition, ResponseState } from "@types";

export const useCompetitions = () => {
  const [searchParams] = useSearchParams();
  const [competitions, setCompetitions] =
    useState<ResponseState<Competition[]>>(initRequestState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setCompetitions((prev) => ({ ...prev, loading: true }));

    getCompetitions(params)
      .then(({ content, ...responseMeta }) => {
        setCompetitions((prev) => ({ ...prev, content, meta: responseMeta }));
      })
      .catch((error) => {
        setCompetitions((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCompetitions((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return competitions;
};
