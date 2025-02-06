import type { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto flex h-[100vh] w-[1160px] flex-col">{children}</div>
  );
};
export default Container;
