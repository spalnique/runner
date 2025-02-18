export type Content<T> = { content: T };

export type Pagination = {
  number: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
};

export type QueryParams = {
  size?: number;
  text?: ReturnType<typeof URLSearchParams.prototype.get>;
  page?: ReturnType<typeof URLSearchParams.prototype.get>;
  status?: ReturnType<typeof URLSearchParams.prototype.get>;
};

export type GetEntities<T> = (
  params: QueryParams
) => Promise<Content<T[]> & { pagination: Pagination }>;

export type GetEntityById<T> = (
  id: string | number
) => Promise<Content<T | null>>;
