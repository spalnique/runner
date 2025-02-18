import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"span"> & { title: string };

const SearchResultTitle = ({ title, className, ...props }: Props) => {
  return (
    <span
      className={`relative z-1 flex h-12 items-center justify-center font-extralight ${className}`}
      {...props}
    >
      {title}
    </span>
  );
};
export default SearchResultTitle;
