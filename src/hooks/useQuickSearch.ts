import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes, getCoaches, getCompetitions } from "@api";
import { initPaginatedState } from "@constants";
import {
  Athlete,
  Coach,
  Competition,
  ContentArray,
  GetContentArray,
  ResponseState,
} from "@types";

const dataFetchFn = {
  competitions: getCompetitions,
  athletes: getAthletes,
  coaches: getCoaches,
};

const fetchTasks = Object.entries(dataFetchFn) as [
  keyof Result,
  GetContentArray<Athlete | Competition | Coach>,
][];

type Result = {
  competitions: ResponseState<ContentArray<Competition>>;
  athletes: ResponseState<ContentArray<Athlete>>;
  coaches: ResponseState<ContentArray<Coach>>;
};

export const useQuickSearch = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<Result>({
    competitions: initPaginatedState,
    athletes: initPaginatedState,
    coaches: initPaginatedState,
  });

  useEffect(() => {
    const text = searchParams.get("text");

    if (!text) {
      setResult({
        competitions: initPaginatedState,
        athletes: initPaginatedState,
        coaches: initPaginatedState,
      });

      return;
    }

    fetchTasks.forEach(([entity, fetchFn]) => {
      setResult((prev) => ({
        ...prev,
        [entity]: { ...prev[entity], loading: true, error: false },
      }));

      fetchFn({ text, size: 5 })
        .then((data) => {
          setResult((prev) => ({
            ...prev,
            [entity]: { ...prev[entity], ...data },
          }));
        })
        .catch((error) => {
          setResult((prev) => ({
            ...prev,
            [entity]: { ...prev[entity], error: true },
          }));
          console.error(error);
        })
        .finally(() => {
          setResult((prev) => ({
            ...prev,
            [entity]: { ...prev[entity], loading: false },
          }));
        });
    });
  }, [searchParams]);

  return result;
};
