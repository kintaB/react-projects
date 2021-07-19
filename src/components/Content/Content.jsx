import React from "react";
import MainImage from "./second-rate-components/MainImage";
import Profile from "./second-rate-components/Profile";
import MainPosts from "./second-rate-components/Posts/MainPost";
import cont from "./Content.module.css";
import NewPostContainer from "./second-rate-components/NewPostContainer";

const Content = (props) => {
  return (
    <div className={cont.content}>
      <MainImage />
      <Profile
        updateUserStatus={props.updateUserStatus}
        profile={props.profile}
        status={props.status}
      />
      <NewPostContainer />
      <MainPosts />
    </div>
  );
};

export default Content;
