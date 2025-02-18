import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"button"> & {
  text: string;
};

const Button = ({ text, className, type = "button", ...props }: Props) => {
  return (
    <button
      className={`flex items-center justify-center bg-blue-700 font-extralight text-white transition-all hover:bg-blue-600 hover:font-normal hover:text-white ${className}`}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};
export default Button;
