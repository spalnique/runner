import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

const Section = ({ children }: SectionProps) => {
  return <section className="container flex flex-col">{children}</section>;
};
export default Section;
