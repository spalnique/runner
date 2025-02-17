import { AxiosRequestConfig } from "axios";

export type Content<T> = { content: T | null };

export type Pagination = {
  number: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
};

export type ContentArray<T> = {
  content: T[];
};

export type ResponseState<T> = {
  pagination?: Pagination;
  error: boolean;
  loading: boolean;
} & T;

export type GetEntities<T> = (
  params: AxiosRequestConfig["params"] & { size?: number }
) => Promise<ContentArray<T> & { pagination: Pagination }>;

export type GetEntityById<T> = (id: string | number) => Promise<Content<T>>;
