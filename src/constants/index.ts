export const baseURL = import.meta.env.VITE_API_URL;

export const initRequestState = {
  content: null,
  meta: null,
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
