import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage, onChangeMessage } from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

export default compose(
  connect(mapStateToProps, {
    onChangeMessage,
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
