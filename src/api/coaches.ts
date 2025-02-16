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

  const totalElements = data.length;
  const content = data.length > params.size ? data.slice(0, params.size) : data;
  const totalPages = Math.ceil(data.length / params.size);

  return {
    content,
    totalElements,
    totalPages,
    first: true,
    last: true,
    number: 0,
  };
};

export const getCoachById: GetSingleResponse = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Coach>>(
    `/coach/${id}`
  );

  return data;
};
