import { GetByIdResponse } from "@types";

import axiosInstance from "./axios.ts";

type GetCompetitionById = (id: string) => Promise<GetByIdResponse>;

export const getCompetitionById: GetCompetitionById = async (id) => {
  const { data } = await axiosInstance.get(`/competitions/${id}`);

  return data;
};
