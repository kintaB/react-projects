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

// let mapDispatchToProps = (dispatch) => {
//   return {
//     onClickFollow: (userId) => {
//       dispatch(followAC(userId));
//     },

//     onClickUnfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountAC(totalCount));
//     },
//     toogleIsFetching: (isFetching) => {
//       dispatch(toogleisFetchingAC(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toogleisFetching,
})(Users);
