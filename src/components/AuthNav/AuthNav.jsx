import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const makeNavLinkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <div className={css.container}>
      <NavLink to="/register" className={makeNavLinkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={makeNavLinkStyle}>
        Log in
      </NavLink>
    </div>
  );
}
