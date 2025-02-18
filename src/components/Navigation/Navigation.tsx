import { NavigationItem } from "@components";
import { Paths } from "@enums";

const Navigation = () => {
  return (
    <nav className="h-full">
      <ul className="flex h-full items-stretch text-gray-500">
        {Object.entries(Paths).map(([name, path]) => (
          <li key={name}>
            <NavigationItem name={name} path={path} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
