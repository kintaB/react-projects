import React from "react";
import NewPost from "./NewPost";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../storeContext";

const NewPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let createPost = (e) => {
          let text = e.target.value;
          let newObjectPost = {
            id: "43",
            message: text,
            likeCount: "21312",
          };
          let action = addPostActionCreator(newObjectPost);
          store.dispatch(action);
        };

        let updatePostText = (e) => {
          let text = e.target.value;
          let action = updatePostTextActionCreator(text);
          store.dispatch(action);
        };
        return (
          <NewPost
            updatePostText={updatePostText}
            createPost={createPost}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
