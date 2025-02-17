import { NavLink, useSearchParams } from "react-router";

type Props = { name: string; route: string };

const NavigationItem = ({ name, route }: Props) => {
  const [searchParams] = useSearchParams();

  const query = searchParams.toString();
  const queryString = query ? `?${query}` : "";

  return (
    <NavLink
      to={route + queryString}
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
