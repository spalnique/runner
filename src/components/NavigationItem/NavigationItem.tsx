import { ComponentPropsWithRef } from "react";
import { NavLink } from "react-router";

import { useQueryContext } from "@contexts";
import { Routes } from "@enums";

type Props = ComponentPropsWithRef<"a"> & { name: string; path: Routes };

const NavigationItem = ({ name, path, ...props }: Props) => {
  const { query } = useQueryContext();

  const to = path ? (query ? `${path}?${query}` : path) : "/";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive && "border-b-2 border-b-blue-700 font-normal text-gray-700") +
        " flex h-full items-center justify-center px-5 capitalize transition-all hover:bg-blue-600 hover:text-white"
      }
      {...props}
    >
      {name}
    </NavLink>
  );
};
export default NavigationItem;
