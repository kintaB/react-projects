import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { setUserProfile, getUserId } from "../../redux/profileReducer";
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
  }
  render() {
    return (
      <>
        <Content {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(
  connect(mapStateToProps, { setUserProfile, getUserId }),
  withRouter,
  withAuthRedirect
)(ContentContainer);
