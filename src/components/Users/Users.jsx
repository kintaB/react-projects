import React from "react";
import * as s from "./User.module.css";
import User from "./User";
import Preloader from "../command/preloader/preloader";

import { Redirect } from "react-router-dom";

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged(page) {
    this.props.getUsers(page, this.props.pageSize);
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
      pages.push(i);
    }
    if (!this.props.isAuth) {
      return <Redirect to="/login" />;
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
                {" | " + p + " | "}
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
                setUnfollow={this.props.setUnfollow}
                setFollow={this.props.setFollow}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Users;
