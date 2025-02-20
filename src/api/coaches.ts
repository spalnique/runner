import { Coach, Content, GetEntities, GetEntityById, Pagination } from '@types';

import axiosInstance from './axios';

export const getCoaches: GetEntities<Coach> = async (params) => {
  const { data: {content, ...pagination} } = await axiosInstance.get<Content<Coach[]> & Pagination>(`/coaches`, {
    params,
  });

  return {
    content,
    pagination
  };
};

export const getCoachById: GetEntityById<Coach> = async (id) => {
  const { data } = await axiosInstance.get<Coach>(`/coaches/${id}`);

  return { content: data };
};
