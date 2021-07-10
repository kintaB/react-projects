import React from "react";
import * as s from "./User.module.css";

const User = ({ onClickFollow, onClickUnfollow, ...props }) => {
  let user = props.u;
  return (
    <>
      <div>
        <div className={s.users}>
          <div className={s.user}>
            <img className={s.profileImage} src={user.profileImage} />
            <div className={s.userName}>{user.name}</div>
            <div>
              {user.follow ? (
                <button onClick={() => onClickUnfollow(user.userId)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => onClickFollow(user.userId)}>
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={s.userDescription}>
          <div className={s.stats}>{user.status}</div>
          <div className={s.location}>
            {user.location.country + ", " + user.location.city}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
