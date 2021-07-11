import Users from "./Users";
import { connect } from "react-redux";
import {
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleisFetching,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleisFetching,
})(Users);
