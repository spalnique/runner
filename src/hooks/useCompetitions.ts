import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitions } from "@api";
import { initPaginatedState } from "@constants";
import { Competition, ContentArray, ResponseState } from "@types";

type QueryState = ResponseState<ContentArray<Competition>>;

export const useCompetitions = () => {
  const [searchParams] = useSearchParams();
  const [competitions, setCompetitions] =
    useState<QueryState>(initPaginatedState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setCompetitions((prev) => ({ ...prev, loading: true }));

    getCompetitions(params)
      .then((data) => {
        setCompetitions((prev) => ({ ...prev, ...data }));
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
