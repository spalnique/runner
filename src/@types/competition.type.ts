import { CompetitionStatus } from "@enums";

export type Competition = {
  id: number;
  days: number[];
  name: string;
  status: string;
  beginDate: string;
  endDate: string;
  country: string;
  city: string;
  url: string;
};

export type GetAllResponse = {
  content: Competition[];
  pageable: {
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  empty: boolean;
};

export type GetAllMeta = Omit<GetAllResponse, "content" | "pageable">;
export type GetAllParams = {
  page: number;
  status: CompetitionStatus | null;
  text: string;
};
