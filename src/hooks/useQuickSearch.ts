import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes, getCompetitions } from "@api";
import { initResponseState as initial } from "@constants";
import {
  Athlete,
  Competition,
  GetPaginatedResponse,
  ResponseState,
} from "@types";

const dataFetchFn = {
  competitions: getCompetitions,
  athletes: getAthletes,
  // coaches: getCoaches,
};

const allInitial = {
  competitions: initial,
  athletes: initial,
  // coaches: initial,
};

type Result = {
  competitions: ResponseState<Competition[]>;
  athletes: ResponseState<Athlete[]>;
  // coaches: ResponseState<Coach[]>;
};

export const useQuickSearch = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<Result>(allInitial);

  useEffect(() => {
    const text = searchParams.get("text") ?? undefined;

    if (!text) return;

    const fetchTasks = Object.entries(dataFetchFn) as [
      keyof Result,
      GetPaginatedResponse,
    ][];

    fetchTasks.forEach(([entity, fetchFn]) => {
      setResult((prev) => ({
        ...prev,
        [entity]: { ...prev[entity], loading: true, error: false },
      }));

      fetchFn({ text, size: 5 })
        .then(({ content, ...responseMeta }) => {
          setResult((prev) => ({
            ...prev,
            [entity]: { ...prev[entity], content, meta: responseMeta },
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
