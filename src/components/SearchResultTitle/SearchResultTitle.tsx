import { ComponentPropsWithRef } from "react";

type SearchResultTitleProps = ComponentPropsWithRef<"span">;

const SearchResultTitle = ({
  children,
  className,
  ...props
}: SearchResultTitleProps) => {
  return (
    <span
      className={`relative z-1 flex items-center justify-center border-b-2 border-b-blue-700 py-3 font-extralight capitalize ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
export default SearchResultTitle;
