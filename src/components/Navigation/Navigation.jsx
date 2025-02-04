import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeNavLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  clsx;
  return (
    <nav>
      <NavLink to="/" className={makeNavLinkStyle}>
        Home
      </NavLink>
    </nav>
  );
}
