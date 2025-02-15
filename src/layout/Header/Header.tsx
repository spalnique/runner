import { Logo, Navigation } from "@components";

const Header = () => {
  return (
    <header className="relative z-1 w-full bg-white shadow-[0_0_6px_2px_rgba(0,0,0,0.1)]">
      <div className="container flex h-16 shrink-0 items-center justify-between font-extralight">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
