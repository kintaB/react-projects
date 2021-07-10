import React from "react";
import User from "./User";
import s from "./User.module.css";

const Users = ({ setUsers, onClickFollow, onClickUnfollow, ...props }) => {
  return (
    <>
      <div className={s.users}>
        {props.users.map((u, index) => {
          return (
            <User
              key={index}
              {...{ onClickFollow, onClickUnfollow, u, setUsers }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Users;
