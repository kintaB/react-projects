import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessage } from "../../redux/dialogsReducer";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

export default compose(
  connect(mapStateToProps, {
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
