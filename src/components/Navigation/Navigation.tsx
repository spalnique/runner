import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <nav className="h-full">
      <ul className="flex h-full items-stretch text-gray-500">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              (isActive
                ? "border-b-2 border-b-blue-700 font-normal text-gray-700"
                : "") +
              " flex h-full items-center justify-center px-5 transition-all hover:bg-blue-700 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/competitions"}
            className={({ isActive }) =>
              (isActive
                ? "border-b-2 border-b-blue-700 font-normal text-gray-700"
                : "") +
              " flex h-full items-center justify-center px-5 transition-all hover:bg-blue-700 hover:text-white"
            }
          >
            Competitions
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/athletes"}
            className={({ isActive }) =>
              (isActive
                ? "border-b-2 border-b-blue-700 font-normal text-gray-700"
                : "") +
              " flex h-full items-center justify-center px-5 transition-all hover:bg-blue-700 hover:text-white"
            }
          >
            Athletes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/coaches"}
            className={({ isActive }) =>
              (isActive
                ? "border-b-2 border-b-blue-700 font-normal text-gray-700"
                : "") +
              " flex h-full items-center justify-center px-5 transition-all hover:bg-blue-700 hover:text-white"
            }
          >
            Coaches
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
