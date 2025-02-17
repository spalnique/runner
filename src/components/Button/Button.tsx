import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const Button = ({ text, className, type = "button", ...props }: Props) => {
  return (
    <button
      className={`min-w-24 bg-white px-3 py-1 text-slate-600 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.05] hover:bg-slate-500 hover:text-white hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)] ${className}`}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};
export default Button;
