import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onSendMessageClick = (e) => {
          let messageObject = {
            id: "32",
            message: e.target.value,
          };
          store.dispatch(sendMessageCreator(messageObject));
        };
        let onNewMessageChange = (event) => {
          let body = event.target.value;
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            dialogsPage={store.getState().dialogsPage}
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
