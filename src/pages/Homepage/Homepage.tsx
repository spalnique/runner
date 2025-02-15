import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router";

import { SearchInput } from "@components";
import { useDebounceCall, useQuickResults } from "@hooks";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { competitions, athletes, coaches } = useQuickResults(searchParams);

  console.log({ competitions, athletes, coaches });

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
    <main className="flex-grow bg-[url('src/assets/images/backgrounds/bg-running-track-1920.webp')] bg-cover bg-center bg-no-repeat">
      <section className="container flex flex-col">
        <SearchInput
          className="rounded-b-2xl bg-white placeholder:font-extralight placeholder:text-gray-400"
          placeholder="Quick search by keyword"
          onChange={debouncedHandleChange}
          defaultValue={text ?? ""}
        />
      </section>
    </main>
  );
};
export default Homepage;
