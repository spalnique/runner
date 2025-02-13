import { InputHTMLAttributes } from "react";

type CompetitionSearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const CompetitionSearchInput = ({ ...props }: CompetitionSearchInputProps) => {
  return (
    <input
      className="rounded border-1 border-cyan-900 px-4"
      {...props}
      placeholder="Search by competition name"
    />
  );
};
export default CompetitionSearchInput;
