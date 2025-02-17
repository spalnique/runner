import { PropsWithChildren } from "react";

type MainProps = PropsWithChildren;

const Main = ({ children }: MainProps) => {
  return (
    <div className="flex-grow bg-[url('./assets/images/backgrounds/bg-running-track-1920.webp')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};
export default Main;
