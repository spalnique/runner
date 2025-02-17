import { useEffect, useState } from "react";

import { initPaginatedState as initial } from "@constants";
import { GetEntities, Pagination, QueryParams } from "@types";

export const useFetchEntities = <T>(
  fetchFn: GetEntities<T>,
  params: QueryParams
) => {
  const [content, setContent] = useState<T[]>(initial.content);
  const [pagination, setPagination] = useState<Pagination>(initial.pagination);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  useEffect(() => {
    setLoading(true);

    fetchFn(params)
      .then(({ content, pagination }) => {
        setContent(content);
        setPagination((prev) => ({ ...prev, ...pagination }));
      })
      .catch((error) => {
        setError(true);
        console.warn(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchFn, params]);

  return { content, pagination, loading, error };
};
