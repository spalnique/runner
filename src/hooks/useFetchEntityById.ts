import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { initSingleState as initial } from "@constants";
import { Athlete, Coach, Competition, GetContent } from "@types";

type NullableEntity = Competition | Athlete | Coach | null;

export const useFetchEntityById = (
  fetchFn: GetContent<Competition | Athlete | Coach>
) => {
  const [searchParams] = useSearchParams();

  const [content, setContent] = useState<NullableEntity>(initial.content);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  useEffect(() => {
    const id = searchParams.get("id");

    if (!id) return;

    setLoading(true);

    fetchFn(id)
      .then(({ content }) => {
        setContent(content);
      })
      .catch((error) => {
        setError(true);
        console.warn(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams, fetchFn]);

  return { content, loading, error };
};
