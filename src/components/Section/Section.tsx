import { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"section">;

const Section = ({ children }: Props) => {
  return <section className="container flex flex-col">{children}</section>;
};
export default Section;
