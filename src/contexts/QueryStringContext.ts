import { createContext, use } from "react";

type QueryContext = {
  query: string;
  textQuery: string | null;
  pageQuery: string | null;
  statusQuery: string | null;
  idQuery: string | null;
  setIdQuery: (param?: string) => void;
  setTextQuery: (param?: string) => void;
  setPageQuery: (param?: string | number) => void;
};

export const QueryStringContext = createContext<QueryContext>({
  query: "",
  textQuery: "",
  pageQuery: "",
  statusQuery: "",
  idQuery: "",
  setIdQuery: () => {},
  setTextQuery: () => {},
  setPageQuery: () => {},
});

export const useQueryContext = () => use(QueryStringContext);
