import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getCompetitions } from "@api";
import { initResponseState } from "@constants";
import { Competition, ResponseState } from "@types";

export const useCompetitions = () => {
  const [searchParams] = useSearchParams();
  const [competitions, setCompetitions] =
    useState<ResponseState<Competition[]>>(initResponseState);

  useEffect(() => {
    (async () => {
      const params = {
        page: searchParams.get("page") ?? undefined,
        text: searchParams.get("text") ?? undefined,
        status: searchParams.get("status") ?? undefined,
      };

      try {
        setCompetitions((prev) => ({
          ...prev,
          error: false,
          loading: true,
        }));

        const { content, ...responseMeta } = await getCompetitions(params);

        setCompetitions((prev) => ({
          ...prev,
          content: content.length ? content : null,
          meta: responseMeta,
        }));
      } catch (error) {
        setCompetitions((prev) => ({ ...prev, error: true }));
        console.error(error);
      } finally {
        setCompetitions((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [searchParams]);

  return { ...competitions };
};
