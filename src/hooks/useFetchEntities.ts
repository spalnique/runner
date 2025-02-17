import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { initPaginatedState as initial } from "@constants";
import {
  Athlete,
  Coach,
  Competition,
  GetContentArray,
  Pagination,
} from "@types";

export const useFetchEntities = (
  fetchFn: GetContentArray<Athlete | Competition | Coach>,
  perPage = 5
) => {
  const [searchParams] = useSearchParams();

  const [content, setContent] = useState<(Competition | Athlete | Coach)[]>(
    initial.content
  );
  const [pagination, setPagination] = useState<Pagination>(initial.pagination);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  useEffect(() => {
    const page = searchParams.get("page");
    const text = searchParams.get("text");
    const status = searchParams.get("status");

    if (!page && !text && !status) return;

    setLoading(true);

    fetchFn({ page, text, status, size: perPage })
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
  }, [fetchFn, perPage, searchParams]);

  return { content, pagination, loading, error };
};
