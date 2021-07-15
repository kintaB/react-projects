import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import Friends from "../Friends/Friends";

const Dialogs = (props) => {
  let newMessageBody = props.dialogsPage.newMessageBody;
  let friendsElements = props.dialogsPage.friends.map((f, index) => (
    <Friends key={index} name={f.name} id={f.id} />
  ));
  let messageElements = props.dialogsPage.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));

  return (
    <div className={s.mainDialogs}>
      <div className={s.friends}>{friendsElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              onChange={props.onChangeMessage}
              value={newMessageBody}
              placeholder="Send your message"
            ></textarea>
          </div>
          <div>
            <button onClick={props.sendMessage}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
