import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./UserMenu.module.css";

const makeNavLinkStyle = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <NavLink to="/contacts" className={makeNavLinkStyle}>
        Contacts
      </NavLink>
      <p className={css.text}>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logout())} className={css.btn}>
        Logout
      </button>
    </div>
  );
}
