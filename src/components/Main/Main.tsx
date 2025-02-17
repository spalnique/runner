import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Main = ({ children }: Props) => {
  return (
    <div className="flex-grow bg-gray-800 bg-[url('./assets/images/backgrounds/bg-running-track-stadium-1920.webp')] bg-cover bg-center bg-no-repeat bg-blend-screen">
      {children}
    </div>
  );
};
export default Main;
