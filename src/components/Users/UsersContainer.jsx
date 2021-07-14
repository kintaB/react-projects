import Users from "./Users";
import { connect } from "react-redux";
import {
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleisFetching,
  toogleFollowingInProgress,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleisFetching,
  toogleFollowingInProgress,
})(Users);
