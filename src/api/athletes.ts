import {
  Athlete,
  Content,
  GetEntities,
  GetEntityById,
  Pagination,
} from "@types";

import axiosInstance from "./axios";

export const getAthletes: GetEntities<Athlete> = async ({
  text,
  ...params
}) => {
  const {
    data: { content, ...pagination },
  } = await axiosInstance.get<Content<Athlete[]> & Pagination>(
    "/participants",
    { params: { ...params, nameParts: text ?? "" } }
  );

  return { content, pagination };
};
export const getAthleteById: GetEntityById<Athlete> = async (id) => {
  const { data } = await axiosInstance.get<Athlete>(`/participants/${id}`);

  return { content: data };
};
