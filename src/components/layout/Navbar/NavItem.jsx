import { NavLink } from "react-router-dom";

export function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative pb-1 transition-colors
         after:absolute after:left-0 after:bottom-0
         after:h-[2px] after:bg-current
         after:transition-all after:duration-300
         ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
      }
    >
      {children}
    </NavLink>
  );
}
