import {
  Competition,
  GetPaginatedResponse,
  GetSingleResponse,
  PaginatedResponse,
  SingleResponse,
} from "@types";

import axiosInstance from "./axios.ts";

export const getCompetitions: GetPaginatedResponse = async (params) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Competition>>(
    "/competitions",
    { params }
  );

  return data;
};

export const getCompetitionById: GetSingleResponse = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Competition>>(
    `/competitions/${id}`
  );

  return data;
};
