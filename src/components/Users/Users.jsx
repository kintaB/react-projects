import React from "react";
import * as s from "./User.module.css";
import User from "./User";
import Preloader from "../command/preloader/preloader";
import usersAPI from "../../api/api";

class Users extends React.Component {
  componentDidMount() {
    this.props.toogleisFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.toogleisFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalCount(response.totalCount);
      });
  }
  onPageChanged(page) {
    this.props.toogleisFetching(true);
    this.props.setCurrentPage(page);
    usersAPI.getUsers(page, this.props.pageSize).then((response) => {
      this.props.toogleisFetching(false);
      this.props.setUsers(response.items);
    });
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
      pages.push(i);
    }
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <div>
          {pages.map((p, index) => {
            return (
              <span
                className={this.props.currentPage === p && s.selectedPage}
                key={index}
                onClick={() => {
                  this.onPageChanged(p);
                }}
              >
                {p + "   "}
              </span>
            );
          })}
        </div>
        <div className={s.users}>
          {this.props.users.map((u, index) => {
            return (
              <User
                followingInProgress={this.props.followingInProgress}
                toogleFollowingInProgress={this.props.toogleFollowingInProgress}
                key={index}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={u}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Users;
