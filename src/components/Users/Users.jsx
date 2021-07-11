import React from "react";
import * as axios from "axios";
import * as s from "./User.module.css";
import User from "./User";
import Preloader from "../command/preloader/preloader";

class Users extends React.Component {
  componentDidMount() {
    this.props.toogleisFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleisFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChanged(page) {
    this.props.toogleisFetching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogleisFetching(false);
        this.props.setUsers(response.data.items);
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
