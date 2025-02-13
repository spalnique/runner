import { InputHTMLAttributes } from "react";

type CompetitionSearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const CompetitionSearchInput = ({ ...props }: CompetitionSearchInputProps) => {
  return (
    <input
      className="px-6 py-3 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)] transition-all outline-none focus-within:shadow-[0_3px_10px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]"
      placeholder="Search by competition name"
      {...props}
    />
  );
};
export default CompetitionSearchInput;
