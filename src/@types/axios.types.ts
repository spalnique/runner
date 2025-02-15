export type SingleResponse<T> = T;

export type PaginatedResponse<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};

export type ResponseMeta<T> = Omit<PaginatedResponse<T>, "content">;

export type ResponseState<T> = {
  meta: ResponseMeta<T> | null;
  content: T | null;
  error: boolean;
  loading: boolean;
};
