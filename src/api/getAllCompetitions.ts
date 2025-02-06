import { GetAllParams, GetAllResponse } from "@types";

import axiosInstance from "./axios.ts";

type getAllFn = (
  params: GetAllParams
) => Promise<GetAllResponse>;

export const getAllCompetitions: getAllFn = async (params) => {
  const { data } = await axiosInstance.get("/competitions", {
    params,
  });
  return data;
};
