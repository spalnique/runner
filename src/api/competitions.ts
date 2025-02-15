import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Competition, PaginatedResponse, SingleResponse } from "@types";

import axiosInstance from "./axios.ts";

type GetCompetitions = (
  params: AxiosRequestConfig["params"]
) => Promise<AxiosResponse["data"]>;

type GetCompetitionById = (id: string) => Promise<AxiosResponse["data"]>;

export const getCompetitions: GetCompetitions = async (params) => {
  const { data } = await axiosInstance.get<PaginatedResponse<Competition>>(
    "/competitions",
    { params }
  );

  return data;
};

export const getCompetitionById: GetCompetitionById = async (id) => {
  const { data } = await axiosInstance.get<SingleResponse<Competition>>(
    `/competitions/${id}`
  );

  return data;
};
