import {
  Coach,
  GetPaginatedResponse,
  GetSingleResponse,
  PaginatedResponse,
  SingleResponse,
} from "@types";

import axiosInstance from "./axios";

export const getCoaches: GetPaginatedResponse = async ({ text, ...params }) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Coach>["content"]>(
    `/coach/name/${text}`,
    { params }
  );

  return data;
};
export const getCoachById: GetSingleResponse = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Coach>>(
    `/coach/${id}`
  );

  return data;
};
