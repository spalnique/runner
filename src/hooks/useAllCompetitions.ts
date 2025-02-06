import { useEffect, useState } from "react";

import { getAllCompetitions } from "@api";
import { Competition, GetAllMeta, GetAllParams } from "@types";

export const useAllCompetitions = (params: GetAllParams) => {
  const [meta, setMeta] = useState<GetAllMeta | null>(null);
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setMeta(null);
        setLoading(true);

        const { content, ...responseMeta } = await getAllCompetitions(params);

        setCompetitions(content);
        setMeta(responseMeta);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  return { meta, competitions, loading, error };
};
