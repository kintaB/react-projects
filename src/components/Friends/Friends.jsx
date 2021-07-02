import React from "react";
import s from "./Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + " " + s.activeDialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
