type QuickSearchStatusProps = { statusText: string };

const SearchResultStatus = ({ statusText }: QuickSearchStatusProps) => {
  return (
    <span className="flex items-center justify-center py-3 font-extralight text-gray-700">
      {statusText}
    </span>
  );
};
export default SearchResultStatus;
