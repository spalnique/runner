import { HTMLAttributes } from "react";

type SearchResultTitleProps = HTMLAttributes<HTMLSpanElement> & {
  text: string;
};

const SearchResultTitle = ({
  text,
  className,
  ...props
}: SearchResultTitleProps) => {
  return (
    <span
      className={`relative z-1 flex items-center justify-center border-b-2 border-b-blue-700 py-3 font-extralight capitalize ${className}`}
      {...props}
    >
      {text}
    </span>
  );
};
export default SearchResultTitle;
