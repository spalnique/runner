import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAthletes, getCoaches, getCompetitions } from "@api";
import { initResponseState as initial } from "@constants";
import { Athlete, Coach, Competition, ResponseState } from "@types";

type CompetitionsState = ResponseState<Competition[]>;
type AthletesState = ResponseState<Athlete[]>;
type CoachesState = ResponseState<Coach[]>;

export const useQuickSearch = () => {
  const [searchParams] = useSearchParams();
  const [competitions, setCompetitions] = useState<CompetitionsState>(initial);
  const [athletes, setAthletes] = useState<AthletesState>(initial);
  const [coaches, setCoaches] = useState<CoachesState>(initial);

  useEffect(() => {
    const text = searchParams.get("text") ?? undefined;

    if (!text) return;

    getCompetitions({ text, size: 5 })
      .then(({ content, ...responseMeta }) => {
        setCompetitions((prev) => ({
          ...prev,
          content: content.length ? content : null,
          meta: responseMeta,
        }));
      })
      .catch((error) => {
        setCompetitions((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCompetitions((prev) => ({ ...prev, loading: false }));
      });

    getAthletes({ nameParts: text, size: 5 })
      .then(({ content, ...responseMeta }) => {
        setAthletes((prev) => ({
          ...prev,
          content: content.length ? content : null,
          meta: responseMeta,
        }));
      })
      .catch((error) => {
        setAthletes((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setAthletes((prev) => ({ ...prev, loading: false }));
      });

    getCoaches({ text })
      .then((content) => {
        if (content.length > 5) content.length = 5;

        setCoaches((prev) => ({
          ...prev,
          content: content.length ? content : null,
        }));
      })
      .catch((error) => {
        setCoaches((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCoaches((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return { competitions, athletes, coaches };
};
