import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import Friends from "../Friends/Friends";

const Dialogs = (props) => {
  return (
    <div className={s.mainDialogs}>
      <div className={s.friends}>
        {props.state.friends.map((f, index) => (
          <Friends key={index} name={f.name} id={f.id} />
        ))}
      </div>
      <div className={s.message}>
        {props.state.message.map((m, index) => (
          <Message key={index} message={m.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
