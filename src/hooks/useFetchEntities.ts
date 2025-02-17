import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { initPaginatedState as initial } from "@constants";
import { Athlete, Coach, Competition, GetEntities, Pagination } from "@types";

export const useFetchEntities = (
  fetchFn: GetEntities<Athlete | Competition | Coach>,
  size = 5
) => {
  const [searchParams] = useSearchParams();

  const [content, setContent] = useState<(Competition | Athlete | Coach)[]>(
    initial.content
  );
  const [pagination, setPagination] = useState<Pagination>(initial.pagination);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
      size,
    };

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
  }, [fetchFn, searchParams, size]);

  return { content, pagination, loading, error };
};
