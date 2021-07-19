import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {
  setUserProfile,
  getUserId,
  setUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserId(userId);
    this.props.setUserStatus(userId);
  }
  render() {
    return (
      <>
        <Content
          {...this.props}
          profile={this.props.profile}
          updateUserStatus={this.props.updateUserStatus}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getUserId,
    setUserStatus,
    updateUserStatus,
  }),
  withRouter,
  withAuthRedirect
)(ContentContainer);
