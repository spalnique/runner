import { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'input'>;

const SearchInput = ({ className, ...props }: Props) => {
  return (
    <input
      className={`rounded-b-2xl bg-white px-6 py-3 shadow-[0_0_3px_1px_rgba(0,0,0,0.1)] transition-all outline-none placeholder:font-extralight placeholder:text-gray-400 focus-within:shadow-[0_3px_9px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_0_9px_3px_rgba(0,0,0,0.1)] ${className}`}
      {...props}
      pattern="^(?!\s)[А-Яа-яЇїІіЄєҐґ0-9 ]+$"
    />
  );
};
export default SearchInput;
