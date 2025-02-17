import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCoaches } from "@api";
import { initPaginatedState as initial } from "@constants";
import { Coach, Pagination } from "@types";

export const useCoaches = (perPage = 5) => {
  const [searchParams] = useSearchParams();

  const [content, setContent] = useState<Coach[]>(initial.content);
  const [pagination, setPagination] = useState<Pagination>(initial.pagination);
  const [loading, setLoading] = useState(initial.loading);
  const [error, setError] = useState(initial.error);

  const handleResetAll = () => {
    setContent(initial.content);
    setPagination(initial.pagination);
    setLoading(initial.loading);
    setError(initial.error);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    const text = searchParams.get("text");
    const status = searchParams.get("status");

    if (!page && !text && !status) {
      handleResetAll();
      return;
    }

    setLoading(true);

    getCoaches({ page, text, status, size: perPage })
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
  }, [searchParams, perPage]);

  return { content, pagination, loading, error };
};
