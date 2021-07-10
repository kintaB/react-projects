import Users from "./Users";
import { connect } from "react-redux";
import { unfollowAC, followAC, setUsersAC } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onClickFollow: (userId) => {
      dispatch(followAC(userId));
    },

    onClickUnfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
