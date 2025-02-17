import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes, getCoaches, getCompetitions } from "@api";
import { initPaginatedState } from "@constants";
import {
  Athlete,
  Coach,
  Competition,
  ContentArray,
  GetEntities,
  ResponseState,
} from "@types";

type Result = {
  competitions: ResponseState<ContentArray<Competition>>;
  athletes: ResponseState<ContentArray<Athlete>>;
  coaches: ResponseState<ContentArray<Coach>>;
};

type EntityKey = keyof typeof entity;
type EntityValue = (typeof entity)[EntityKey];

const entity: Record<
  keyof Result,
  {
    fetchFn: GetEntities<Competition | Athlete | Coach>;
    init: typeof initPaginatedState;
  }
> = {
  competitions: { fetchFn: getCompetitions, init: initPaginatedState },
  athletes: { fetchFn: getAthletes, init: initPaginatedState },
  coaches: { fetchFn: getCoaches, init: initPaginatedState },
};

const fetchTasks = Object.entries(entity) as [EntityKey, EntityValue][];

export const useQuickSearch = () => {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<Result>({
    competitions: entity.competitions.init,
    athletes: entity.athletes.init,
    coaches: entity.coaches.init,
  });

  useEffect(() => {
    const text = searchParams.get("text");

    if (!text) {
      setResult({
        competitions: entity.competitions.init,
        athletes: entity.athletes.init,
        coaches: entity.coaches.init,
      });

      return;
    }

    fetchTasks.forEach(([entity, { fetchFn }]) => {
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
