import { Outlet, NavLink } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav__items}>
          <li className={styles.nav__item}>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? styles.nav__pending : isActive ? styles.nav__active : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink 
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? styles.nav__pending : isActive ? styles.nav__active : ""
            }
              >
                About
              </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink 
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? styles.nav__pending : isActive ? styles.nav__active : ""
              }
              >
                Posts
              </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink 
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? styles.nav__pending : isActive ? styles.nav__active : ""
              }
              >
                Dashboard
              </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
