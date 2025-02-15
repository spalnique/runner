import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Coach, PaginatedResponse, SingleResponse } from "@types";

import axiosInstance from "./axios";

type GetCoaches = (
  params: AxiosRequestConfig["params"]
) => Promise<AxiosResponse["data"]>;

type GetCoachById = (id: string) => Promise<AxiosResponse["data"]>;

export const getCoaches: GetCoaches = async (params) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Coach>>(
    `/coach/name/${params.text}`
  );

  return data;
};
export const getCoachById: GetCoachById = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Coach>>(
    `/coach/${id}`
  );

  return data;
};
