import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"span"> & {
  status: string;
};

const SearchStatus = ({ status, className, ...Props }: Props) => {
  return (
    <span
      className={`flex items-center justify-center py-3 font-extralight text-gray-700 ${className}`}
      {...Props}
    >
      {status}
    </span>
  );
};
export default SearchStatus;
