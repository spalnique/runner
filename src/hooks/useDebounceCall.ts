import { useRef } from "react";

import { debounce } from "@helpers";

export const useDebounceCall = <T extends (...args: never[]) => void>(
  callback: T,
  delay = 500
) => {
  const { current: debouncedCall } = useRef(debounce(callback, delay));

  return (...args: Parameters<T>) => debouncedCall(...args);
};
