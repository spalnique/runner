import {
  Competition,
  ContentArray,
  GetEntities,
  GetEntityById,
  Pagination,
} from "@types";

import axiosInstance from "./axios.ts";

export const getCompetitions: GetEntities<Competition> = async (params) => {
  const {
    data: { content, ...pagination },
  } = await axiosInstance.get<ContentArray<Competition> & Pagination>(
    "/competitions",
    { params }
  );

  return { content, pagination };
};

export const getCompetitionById: GetEntityById<Competition> = async (id) => {
  const { data } = await axiosInstance.get<Competition>(`/competitions/${id}`);

  return { content: data };
};
