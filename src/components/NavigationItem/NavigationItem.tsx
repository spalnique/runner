import { NavLink } from "react-router";

import { useQueryContext } from "@contexts";

type Props = { name: string; route: string };

const NavigationItem = ({ name, route }: Props) => {
  const queryValue = useQueryContext().query;

  const query = queryValue ? `?${queryValue}` : "";

  return (
    <NavLink
      to={route + query}
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
