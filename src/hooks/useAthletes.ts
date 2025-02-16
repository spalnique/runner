import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes } from "@api";
import { initPaginatedState } from "@constants";
import { Athlete, ContentArray, ResponseState } from "@types";

type QueryState = ResponseState<ContentArray<Athlete>>;

export const useAthletes = () => {
  const [searchParams] = useSearchParams();
  const [athletes, setAthletes] = useState<QueryState>(initPaginatedState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setAthletes((prev) => ({ ...prev, loading: true }));

    getAthletes(params)
      .then((data) => {
        setAthletes((prev) => ({ ...prev, ...data }));
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
