import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Main = ({ children }: Props) => {
  return (
    <div className="flex-grow bg-[url('./assets/images/backgrounds/bg-running-track-1920.webp')] bg-cover bg-center bg-no-repeat">
      {children}
    </div>
  );
};
export default Main;
