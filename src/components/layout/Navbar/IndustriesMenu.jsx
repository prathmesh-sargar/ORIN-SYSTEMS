import { Link } from "react-router-dom";
import { navigation } from "../../../data/navigation";

function Column({ items }) {
  return (
    <div className="space-y-4 text-lg">
      {items.map((item) => {

        // normal link
        if (item.label) {
          return (
            <Link
              key={item.href}
              to={item.href}
              className="block font-medium text-black hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          );
        }

        // grouped item
        return (
          <div key={item.title}>
            <p className="font-semibold text-black">
              {item.title}
            </p>

            <ul className="ml-4 mt-2 space-y-1.5">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function IndustriesMenu() {
  return (
    <div className="grid grid-cols-2 gap-x-24">
      <Column items={navigation.industriesColumn1} />
      <Column items={navigation.industriesColumn2} />
    </div>
  );
}
