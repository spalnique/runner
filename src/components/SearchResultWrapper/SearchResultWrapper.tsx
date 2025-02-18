import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"div">;

const SearchResultWrapper = ({ children }: Props) => {
  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-white shadow-[0_0_3px_1px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
};
export default SearchResultWrapper;
