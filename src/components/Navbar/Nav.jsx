import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink to="/profile" activeClassName={nav.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/dialogs" activeClassName={nav.activeLink}>
          Dialogs
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/users" activeClassName={nav.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/news" activeClassName={nav.activeLink}>
          News
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/music" activeClassName={nav.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/settings" activeClassName={nav.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
