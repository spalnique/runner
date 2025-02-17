import { ChangeEventHandler } from "react";
import { useSearchParams } from "react-router";

import { Main, QuickSearchResults, SearchInput, Section } from "@components";
import { useDebounceCall } from "@hooks";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const text = searchParams.get("text");

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    target.value = target.value.trimStart();

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
    <Main>
      <Section>
        <SearchInput
          key={text}
          defaultValue={text ?? ""}
          placeholder="Quick search by competition, athlete or coach"
          onChange={debouncedHandleChange}
          autoFocus
        />
        {text && <QuickSearchResults />}
      </Section>
    </Main>
  );
};
export default Homepage;
