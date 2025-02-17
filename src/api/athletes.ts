import {
  Athlete,
  ContentArray,
  GetEntities,
  GetEntityById,
  Pagination,
} from "@types";

import axiosInstance from "./axios";

export const getAthletes: GetEntities<Athlete> = async ({ text, ...rest }) => {
  const {
    data: { content, ...pagination },
  } = await axiosInstance.get<ContentArray<Athlete> & Pagination>(
    "/participants",
    { params: { ...rest, nameParts: text } }
  );

  return { content, pagination };
};
export const getAthleteById: GetEntityById<Athlete> = async (id) => {
  const { data } = await axiosInstance.get<Athlete>(`/participants/${id}`);

  return { content: data };
};
