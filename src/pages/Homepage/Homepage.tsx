import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router";

import { SearchInput, SearchResults } from "@components";
import { useDebounceCall } from "@hooks";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const text = searchParams.get("text");

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setSearchParams((prev) => {
      if (!target.value) {
        prev.delete("text");
        prev.delete("page");
        return prev;
      }

      prev.set("text", target.value);
      prev.delete("page");

      return prev;
    });
  };

  const debouncedHandleChange = useDebounceCall(handleChange);

  return (
    <main className="flex-grow bg-[url('./assets/images/backgrounds/bg-running-track-1920.webp')] bg-cover bg-center bg-no-repeat">
      <section className="container flex flex-col">
        <SearchInput
          className="rounded-b-2xl bg-white placeholder:font-extralight placeholder:text-gray-400"
          placeholder="Quick search by keyword"
          onChange={debouncedHandleChange}
          defaultValue={text ?? ""}
        />
        {text && <SearchResults />}
      </section>
    </main>
  );
};
export default Homepage;
