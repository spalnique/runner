export const baseURL = import.meta.env.VITE_API_URL;

export const initPaginatedState = {
  content: [],
  error: false,
  loading: false,
};

export const initSingleState = {
  content: null,
  error: false,
  loading: false,
};

export const quickSearchLimit = 5;

export const routes = {
  home: "",
  competitions: "competitions",
  athletes: "athletes",
  coaches: "coaches",
};
