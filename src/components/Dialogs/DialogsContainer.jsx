import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (e) => {
      let text = e.target.value;
      dispatch(updateNewMessageBodyCreator(text));
    },
    onSendMessageClick: (e) => {
      let messageObject = {
        id: "32",
        message: e.target.value,
      };
      dispatch(sendMessageCreator(messageObject));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
