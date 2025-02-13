import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { getAllCompetitions } from "@api";
import { Competition, GetAllMeta } from "@types";

type Response = {
  competitions: Competition[];
  meta: GetAllMeta | null;
  params: Record<string, string> | null;
  error: boolean;
  loading: boolean;
};

export const useAllCompetitions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [response, setResponse] = useState<Response>({
    competitions: [],
    meta: null,
    params: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    (async () => {
      const params = {
        page: searchParams.get("page") ?? "0",
        text: searchParams.get("text") ?? "",
        status: searchParams.get("status") ?? "",
      };

      try {
        setResponse((prev) => ({
          ...prev,
          error: false,
          loading: true,
          params,
        }));

        const { content, ...responseMeta } = await getAllCompetitions(params);

        setResponse((prev) => ({
          ...prev,
          competitions: content,
          meta: responseMeta,
        }));
      } catch (error) {
        setResponse((prev) => ({ ...prev, error: true }));
        console.error(error);
      } finally {
        setResponse((prev) => ({ ...prev, loading: false }));
      }
    })();
  }, [searchParams]);

  return { ...response, setSearchParams };
};
