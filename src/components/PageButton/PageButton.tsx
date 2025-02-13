import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type PageButtonProps = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const PageButton = ({ children, ...props }: PageButtonProps) => {
  return (
    <button className="w-32 rounded bg-cyan-700 p-2 text-white" {...props}>
      {children}
    </button>
  );
};
export default PageButton;
