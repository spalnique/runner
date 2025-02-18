import { ComponentPropsWithRef } from 'react';

type Props = ComponentPropsWithRef<'main'>;

const Main = ({ children }: Props) => {
  return (
    <div className="flex-grow bg-gray-800 bg-[url('./assets/images/backgrounds/bg-running-track-forest-1920.webp')] bg-cover bg-center bg-no-repeat bg-blend-screen">
      {children}
    </div>
  );
};
export default Main;
