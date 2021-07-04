import React from "react";
import NewPost from "./NewPost";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";

const NewPostContainer = (props) => {
  let createPost = (e) => {
    let text = e.target.value;
    let newObjectPost = {
      id: "43",
      message: text,
      likeCount: "21312",
    };
    let action = addPostActionCreator(newObjectPost);
    props.dispatch(action);
  };

  let updatePostText = (e) => {
    let text = e.target.value;
    let action = updatePostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <NewPost
      updatePostText={updatePostText}
      createPost={createPost}
      newPostText={props.newPostText}
    />
  );
};

export default NewPostContainer;
