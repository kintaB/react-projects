import React from "react";
import MainImage from "./second-rate-components/MainImage";
import Profile from "./second-rate-components/Profile";
import MainPosts from "./second-rate-components/Posts/MainPost";
import cont from "./Content.module.css";
import NewPostContainer from "./second-rate-components/NewPostContainer";

import { Redirect } from "react-router-dom";

const Content = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={cont.content}>
      <MainImage />
      <Profile profile={props.profile} />
      <NewPostContainer />
      <MainPosts />
    </div>
  );
};

export default Content;
