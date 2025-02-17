export const baseURL = import.meta.env.VITE_API_URL;

export const initPaginatedState = {
  content: [],
  pagination: {
    first: true,
    last: false,
    number: 0,
    totalPages: 0,
    totalElements: 0,
  },
  error: false,
  loading: false,
};

export const initSingleState = {
  content: null,
  error: false,
  loading: false,
};

export const routes = {
  home: "",
  competitions: "/competitions",
  athletes: "/athletes",
  coaches: "/coaches",
};
