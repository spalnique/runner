import { AxiosRequestConfig, AxiosResponse } from "axios";

export type SingleResponse<T> = T;

export type ResponseMeta = {
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
  totalElements: number;
  totalPages: number;
};

export type PaginatedResponse<T> = ResponseMeta & {
  content: T[];
};

export type ResponseState<T> = {
  meta: ResponseMeta | null;
  content: T;
  error: boolean;
  loading: boolean;
};

export type GetPaginatedResponse = (
  params: AxiosRequestConfig["params"]
) => Promise<AxiosResponse["data"]>;

export type GetSingleResponse = (
  id: string | number
) => Promise<AxiosResponse["data"]>;
