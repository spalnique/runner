import { GetAllResponse } from "@types";

import axiosInstance from "./axios.ts";

type GetCompetitions = (
  params: Record<string, string | null> | null
) => Promise<GetAllResponse>;

export const getCompetitions: GetCompetitions = async (params) => {
  const { data } = await axiosInstance.get("/competitions", {
    params,
  });
  return data;
};
