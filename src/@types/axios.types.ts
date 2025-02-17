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

export type QueryParams = {
  size?: ReturnType<typeof URLSearchParams.prototype.get>;
  text?: ReturnType<typeof URLSearchParams.prototype.get>;
  page?: ReturnType<typeof URLSearchParams.prototype.get>;
  status?: ReturnType<typeof URLSearchParams.prototype.get>;
};

export type GetEntities<T> = (
  params: QueryParams
) => Promise<ContentArray<T> & { pagination: Pagination }>;

export type GetEntityById<T> = (id: string | number) => Promise<Content<T>>;
