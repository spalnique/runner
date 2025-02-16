import {
  Athlete,
  GetPaginatedResponse,
  GetSingleResponse,
  PaginatedResponse,
  SingleResponse,
} from "@types";

import axiosInstance from "./axios";

export const getAthletes: GetPaginatedResponse = async ({ text, ...rest }) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Athlete>>(
    "/participants",
    { params: { ...rest, nameParts: text } }
  );

  return data;
};
export const getAthleteById: GetSingleResponse = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Athlete>>(
    `/participants/${id}`
  );

  return data;
};
