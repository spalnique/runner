import { Entity, NullableEntity } from './entities.types';

export type Content<T extends Entity[] | NullableEntity> = { content: T };

export type Pagination = {
  number: number;
  first: boolean;
  last: boolean;
  totalElements: number;
  totalPages: number;
};

export type QueryParams = {
  size: number;
  text?: ReturnType<typeof URLSearchParams.prototype.get>;
  page?: ReturnType<typeof URLSearchParams.prototype.get>;
  status?: ReturnType<typeof URLSearchParams.prototype.get>;
};

export type GetEntities<T extends Entity> = (
  params: QueryParams
) => Promise<Content<T[]> & { pagination: Pagination }>;

export type GetEntityById<T extends Entity> = (
  id: string | number
) => Promise<Content<T | null>>;
