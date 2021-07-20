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
import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
  getIsAuth,
} from "../../redux/usersSelectors";

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//     isAuth: state.auth.isAuth,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state),
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
