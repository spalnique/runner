import { NavigationItem } from "@components";
import { routes } from "@constants";

const Navigation = () => {
  return (
    <nav className="h-full">
      <ul className="flex h-full items-stretch text-gray-500">
        {Object.entries(routes).map(([name, route]) => (
          <li key={name}>
            <NavigationItem name={name} route={route} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;
