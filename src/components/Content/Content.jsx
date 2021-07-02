import React from "react";
import MainImage from "./second-rate-components/MainImage";
import Profile from "./second-rate-components/Profile";
import MainPosts from "./second-rate-components/Posts/MainPost";
import NewPost from "./second-rate-components/NewPost";
import cont from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={cont.content}>
      <MainImage />
      <Profile />
      <NewPost
        dispatch={props.dispatch}
        newPostText={props.state.newPostText}
      />
      <MainPosts post={props.state.post} />
    </div>
  );
};

export default Content;
