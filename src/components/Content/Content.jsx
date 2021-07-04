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
      <Profile />
      <NewPostContainer
        dispatch={props.dispatch}
        newPostText={props.state.newPostText}
      />
      <MainPosts post={props.state.post} />
    </div>
  );
};

export default Content;
