import { Link } from "react-router-dom";
import { navigation } from "../../../data/navigation";

export default function WhatWeDoMenu() {
  const mid = Math.ceil(navigation.whatWeDo.length / 2);

  const col1 = navigation.whatWeDo.slice(0, mid);
  const col2 = navigation.whatWeDo.slice(mid);

  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-lg">
      <div className="space-y-3">
        {col1.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="space-y-3">
        {col2.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="block hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
