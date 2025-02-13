import { useEffect, useState } from "react";

import { getCompetitions } from "@api";
import { Competition, GetAllMeta } from "@types";

type Response = {
  competitions: Competition[];
  meta: GetAllMeta | null;
  params: Record<string, string | null> | null;
  error: boolean;
  loading: boolean;
};

export const useCompetitions = (searchParams: URLSearchParams) => {
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
        page: searchParams.get("page") ?? null,
        text: searchParams.get("text") ?? null,
        // status: searchParams.get("status") ?? "Проводиться",
        status: searchParams.get("status") ?? null,
      };

      try {
        setResponse((prev) => ({
          ...prev,
          error: false,
          loading: true,
        }));

        const { content, ...responseMeta } = await getCompetitions(params);

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

  return { ...response };
};
