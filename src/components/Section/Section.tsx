import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"section">;

const Section = ({ children }: Props) => {
  return <section className="container flex flex-col">{children}</section>;
};
export default Section;
