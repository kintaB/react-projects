import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { sendMessage, onChangeMessage } from "../../redux/dialogsReducer";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

const DialogsContainer = connect(mapStateToProps, {
  onChangeMessage,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
