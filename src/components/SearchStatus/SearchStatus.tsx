import { ComponentPropsWithRef } from "react";

type QuickSearchStatusProps = ComponentPropsWithRef<"span"> & {
  status: string;
};

const SearchStatus = ({
  status,
  className,
  ...props
}: QuickSearchStatusProps) => {
  return (
    <span
      className={`flex items-center justify-center py-3 font-extralight text-gray-700 ${className}`}
      {...props}
    >
      {status}
    </span>
  );
};
export default SearchStatus;
