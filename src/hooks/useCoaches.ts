import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCoaches } from "@api";
import { initRequestState } from "@constants";
import { Coach, ResponseState } from "@types";

export const useCoaches = () => {
  const [searchParams] = useSearchParams();
  const [coaches, setCoaches] =
    useState<ResponseState<Coach[]>>(initRequestState);

  useEffect(() => {
    const params = {
      page: searchParams.get("page"),
      text: searchParams.get("text"),
      status: searchParams.get("status"),
    };

    setCoaches((prev) => ({ ...prev, loading: true }));

    getCoaches(params)
      .then(({ content, ...responseMeta }) => {
        setCoaches((prev) => ({ ...prev, content, meta: responseMeta }));
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
