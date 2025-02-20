import { createContext, use } from 'react';

type QueryContext = {
  query: string;
  text: string | null;
  page: number;
  status: string | null;
  id: string | null;
  setIdQuery: (param?: string) => void;
  setTextQuery: (param?: string) => void;
  setPageQuery: (param?: string | number) => void;
};

export const QueryStringContext = createContext<QueryContext>({
  query: '',
  text: '',
  page: 0,
  status: '',
  id: '',
  setIdQuery: () => {},
  setTextQuery: () => {},
  setPageQuery: () => {},
});

export const useQueryContext = () => use(QueryStringContext);
