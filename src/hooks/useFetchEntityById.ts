import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import { initSingleState as initial } from "@constants";
import { Athlete, Coach, Competition, GetEntityById } from "@types";

type NullableEntity = Competition | Athlete | Coach | null;

export const useFetchEntityById = (
  fetchFn: GetEntityById<Competition | Athlete | Coach>
) => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const entityId = searchParams.get("id") || id;

  const [content, setContent] = useState<NullableEntity>(initial.content);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  useEffect(() => {
    if (!entityId) return;

    setLoading(true);

    fetchFn(entityId)
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
  }, [fetchFn, entityId]);

  return { content, loading, error };
};
