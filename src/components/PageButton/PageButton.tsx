import { ButtonHTMLAttributes } from "react";

type PageButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const PageButton = ({ text, ...props }: PageButtonProps) => {
  return (
    <button className="w-32 rounded bg-cyan-700 p-2 text-white" {...props}>
      {text}
    </button>
  );
};
export default PageButton;
