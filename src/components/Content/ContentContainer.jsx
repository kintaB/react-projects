import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { setUserProfile, getUserId } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

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

let withUrlDataConteinerComponent = withRouter(ContentContainer);

export default connect(mapStateToProps, { setUserProfile, getUserId })(
  withUrlDataConteinerComponent
);
