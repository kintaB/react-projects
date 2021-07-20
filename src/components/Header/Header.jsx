import React from "react";
import head from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={head.header}>
      <img
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/I/51ModV%2BblCL._AC_SL1000_.jpg"
      />
      <div className={head.loginBlock}>
        {props.isAuth === true ? (
          <div className={head.login}>
            {" "}
            <button className={head.logoutBtn} onClick={props.logout}>Log Out</button> {props.login}
          </div>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
