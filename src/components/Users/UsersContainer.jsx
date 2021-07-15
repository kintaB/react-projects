import Users from "./Users";
import { connect } from "react-redux";
import {
  unfollow,
  follow,
  setCurrentPage,
  getUsers,
  setUnfollow,
  setFollow,
} from "../../redux/usersReducer";
import { withAuthRedirect } from "../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
    setUnfollow,
    setFollow,
  }),
  withAuthRedirect
)(Users);
