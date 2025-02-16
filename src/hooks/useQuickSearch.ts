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

// type CompetitionsState = ResponseState<Competition[]>;
// type AthletesState = ResponseState<Athlete[]>;
// type CoachesState = ResponseState<Coach[]>;

type Result = {
  competitions: ResponseState<Competition[]>;
  athletes: ResponseState<Athlete[]>;
  // coaches: ResponseState<Coach[]>;
};

export const useQuickSearch = () => {
  const [searchParams] = useSearchParams();
  // const [competitions, setCompetitions] = useState<CompetitionsState>(initial);
  // const [athletes, setAthletes] = useState<AthletesState>(initial);
  // const [coaches, setCoaches] = useState<CoachesState>(initial);
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

  // useEffect(() => {
  //   const text = searchParams.get("text") ?? undefined;

  //   if (!text) return;

  //   setCompetitions((prev) => ({ ...prev, loading: true }));
  //   setAthletes((prev) => ({ ...prev, loading: true }));
  //   setCoaches((prev) => ({ ...prev, loading: true }));

  //   getCompetitions({ text, size: 5 })
  //     .then(({ content, ...responseMeta }) => {
  //       setCompetitions((prev) => ({
  //         ...prev,
  //         content: content.length ? content : null,
  //         meta: responseMeta,
  //       }));
  //     })
  //     .catch((error) => {
  //       setCompetitions((prev) => ({ ...prev, error: true }));
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setCompetitions((prev) => ({ ...prev, loading: false }));
  //     });

  //   getAthletes({ nameParts: text, size: 5 })
  //     .then(({ content, ...responseMeta }) => {
  //       setAthletes((prev) => ({
  //         ...prev,
  //         content: content.length ? content : null,
  //         meta: responseMeta,
  //       }));
  //     })
  //     .catch((error) => {
  //       setAthletes((prev) => ({ ...prev, error: true }));
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setAthletes((prev) => ({ ...prev, loading: false }));
  //     });

  //   getCoaches({ text })
  //     .then((content) => {
  //       if (content.length > 5) content.length = 5;

  //       setCoaches((prev) => ({
  //         ...prev,
  //         content: content.length ? content : null,
  //       }));
  //     })
  //     .catch((error) => {
  //       setCoaches((prev) => ({ ...prev, error: true }));
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setCoaches((prev) => ({ ...prev, loading: false }));
  //     });
  // }, [searchParams]);

  return result;
};
