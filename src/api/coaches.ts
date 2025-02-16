import { Coach, GetContent, GetContentArray } from "@types";

import axiosInstance from "./axios";

export const getCoaches: GetContentArray<Coach> = async ({
  text,
  size = 20,
  ...params
}) => {
  const { data } = await axiosInstance.get<Coach[]>(`/coach/name/${text}`, {
    params: { ...params, size },
  });

  const totalElements = data.length;
  const content = data.length > size ? data.slice(0, size) : data;
  const totalPages = Math.ceil(data.length / size);

  return {
    content,
    pagination: {
      totalElements,
      totalPages,
      first: true,
      last: true,
      number: 0,
    },
  };
};

export const getCoachById: GetContent<Coach> = async (id) => {
  const { data } = await axiosInstance.get<Coach>(`/coach/${id}`);

  return { content: data };
};
