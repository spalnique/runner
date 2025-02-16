import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCoaches } from "@api";
import { initPaginatedState } from "@constants";
import { Coach, ContentArray, ResponseState } from "@types";

type QueryState = ResponseState<ContentArray<Coach>>;

export const useCoaches = () => {
  const [searchParams] = useSearchParams();
  const [coaches, setCoaches] = useState<QueryState>(initPaginatedState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setCoaches((prev) => ({ ...prev, loading: true }));

    getCoaches(params)
      .then((data) => {
        setCoaches((prev) => ({ ...prev, ...data }));
      })
      .catch((error) => {
        setCoaches((prev) => ({ ...prev, error: true }));
        console.error(error);
      })
      .finally(() => {
        setCoaches((prev) => ({ ...prev, loading: false }));
      });
  }, [searchParams]);

  return coaches;
};
