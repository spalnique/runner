import { debounce } from "@helpers";

export const useDebounceCall = <T extends (...args: never[]) => void>(
  callback: T,
  delay = 500
) => {
  const debouncedCall = debounce(callback, delay);

  return (...args: Parameters<T>) => debouncedCall(...args);
};
