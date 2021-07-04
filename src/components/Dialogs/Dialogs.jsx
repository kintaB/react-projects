import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import Friends from "../Friends/Friends";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let newMessageBody = props.state.newMessageBody;
  let friendsElements = props.state.friends.map((f, index) => (
    <Friends key={index} name={f.name} id={f.id} />
  ));
  let messageElements = props.state.message.map((m, index) => (
    <Message key={index} message={m.message} />
  ));
  let onSendMessageClick = (e) => {
    let messageObject = {
      id: "32",
      message: e.target.value,
    };
    props.dispatch(sendMessageCreator(messageObject));
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div className={s.mainDialogs}>
      <div className={s.friends}>{friendsElements}</div>
      <div className={s.message}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              onChange={onNewMessageChange}
              value={newMessageBody}
              placeholder="Send your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
