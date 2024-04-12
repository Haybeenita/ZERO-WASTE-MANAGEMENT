/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./nav-link.module.css";

function SidebarLink({ children, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? `bg-white shadow ${styles.active}` : ""} ${
          styles["nav-link"]
        } rounded-lg ease-in-out text-sm py-2 active my-0 mx-4 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors hover:bg-white/40`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default SidebarLink;
