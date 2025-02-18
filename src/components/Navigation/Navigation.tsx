import { NavigationItem } from "@components";
import { Routes } from "@enums";

const Navigation = () => {
  return (
    <nav className="h-full">
      <ul className="flex h-full items-stretch text-gray-500">
        {Object.entries(Routes).map(([name, route]) => (
          <li key={name}>
            <NavigationItem name={name} path={route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
