import { Link } from "react-router";

import { Icon } from "@components";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2 px-5">
      <Icon id="logo" size={56} />
      <span className="text-2xl font-extrabold text-blue-800 uppercase">
        Run
      </span>
    </Link>
  );
};
export default Logo;
