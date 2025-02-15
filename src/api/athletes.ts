import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Athlete, PaginatedResponse, SingleResponse } from "@types";

import axiosInstance from "./axios";

type GetAthletes = (
  params: AxiosRequestConfig["params"]
) => Promise<AxiosResponse["data"]>;

type GetAthleteById = (id: string) => Promise<AxiosResponse["data"]>;

export const getAthletes: GetAthletes = async (params) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Athlete>>(
    "/participants",
    {
      params,
    }
  );

  return data;
};
export const getAthleteById: GetAthleteById = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Athlete>>(
    `/participants/${id}`
  );

  return data;
};
