import {
  Athlete,
  Content,
  GetEntities,
  GetEntityById,
  Pagination,
} from '@types';

import axiosInstance from './axios';

export const getAthletes: GetEntities<Athlete> = async (params) => {
  const {
    data: { content, ...pagination },
  } = await axiosInstance.get<Content<Athlete[]> & Pagination>(
    '/participants',
    { params }
  );

  content.forEach((item) => {
    item.name = item.name.trim().replaceAll('&nbsp;', '');
    item.surname = item.surname.trim().replaceAll('&nbsp;', '');
  });

  return { content, pagination };
};
export const getAthleteById: GetEntityById<Athlete> = async (id) => {
  const { data } = await axiosInstance.get<Athlete>(`/participants/${id}`);

  return { content: data };
};
