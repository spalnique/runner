import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"span">;

const SearchResultTitle = ({ children, className, ...Props }: Props) => {
  return (
    <span
      className={`relative z-1 flex items-center justify-center border-b-2 border-b-blue-700 py-3 font-extralight capitalize ${className}`}
      {...Props}
    >
      {children}
    </span>
  );
};
export default SearchResultTitle;
