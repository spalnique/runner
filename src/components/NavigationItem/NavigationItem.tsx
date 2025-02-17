import { NavLink } from "react-router";

import { useQueryContext } from "@contexts";

type Props = { name: string; path: string };

const NavigationItem = ({ name, path }: Props) => {
  const { query } = useQueryContext();

  const to = path ? (query ? `${path}?${query}` : path) : "/";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive && "border-b-2 border-b-blue-700 font-normal text-gray-700") +
        " flex h-full items-center justify-center px-5 capitalize transition-all hover:bg-blue-600 hover:text-white"
      }
    >
      {name}
    </NavLink>
  );
};
export default NavigationItem;
