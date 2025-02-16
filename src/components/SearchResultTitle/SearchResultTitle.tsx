type SearchResultTitleProps = { text: string };

const SearchResultTitle = ({ text }: SearchResultTitleProps) => {
  return (
    <span className="relative z-1 flex items-center justify-center bg-white py-3 font-extralight text-gray-700 capitalize">
      {text}
    </span>
  );
};
export default SearchResultTitle;
