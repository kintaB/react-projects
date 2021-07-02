import React from "react";
import cont from "../../Content/Content.module.css";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/state";

const NewPost = (props) => {
  let newTextPost = React.createRef();
  let createPost = () => {
    let text = newTextPost.current.value;
    let newObjectPost = {
      id: "43",
      message: text,
      likeCount: "21312",
    };
    let action = addPostActionCreator(newObjectPost);
    props.dispatch(action);
  };

  let updatePostText = () => {
    let text = newTextPost.current.value;
    let action = updatePostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <>
      <div className="new-post">
        <div className={cont.newPostTitle}>My posts</div>
        <div className="new-post_create">
          <div className="new-post_input">
            <textarea
              onChange={updatePostText}
              ref={newTextPost}
              value={props.newPostText}
            />
            <div className={cont.buttons}></div>
            <button onClick={createPost}>create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
