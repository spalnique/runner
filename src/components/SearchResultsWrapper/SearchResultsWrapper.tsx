import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const SearchResultsWrapper = ({ children }: Props) => {
  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
};
export default SearchResultsWrapper;
