import React from "react";
import s from "./Dialogs.module.css";
import Message from "../Message/Message";
import Friends from "../Friends/Friends";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../command/formsControll/formsControll";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
  let onSubmit = (formData) => {
    props.sendMessage(formData.message);
  };
  let friendsElements = props.dialogsPage.friends.map((f, index) => (
    <Friends key={index} name={f.name} id={f.id} />
  ));
  let messageElements = props.dialogsPage.messages.map((m, index) => (
    <Message key={index} message={m.message} />
  ));
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={s.mainDialogs}>
      <div className={s.friends}>{friendsElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <ReduxSendMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const DialogsReduxForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <div>
            <Field
              component={Textarea}
              validate={[requiredField, maxLength100]}
              name={"message"}
              placeholder="Send your message"
            ></Field>
          </div>
          <div>
            <button>SEND</button>
          </div>
        </div>
      </form>
    </>
  );
};

const ReduxSendMessageForm = reduxForm({ form: "dialog" })(DialogsReduxForm);

export default Dialogs;
