import { CompetitionStatus } from '@enums';

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
  text?: string | null;
  page?: number;
  status?: CompetitionStatus | null;
};

export type GetEntities<T extends Entity> = (
  params: QueryParams
) => Promise<Content<T[]> & { pagination: Pagination }>;

export type GetEntityById<T extends Entity> = (
  id: string | number
) => Promise<Content<T | null>>;
