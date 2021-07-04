import React from "react";
import cont from "../../Content/Content.module.css";

const NewPost = (props) => {
  return (
    <>
      <div className="new-post">
        <div className={cont.newPostTitle}>My posts</div>
        <div className="new-post_create">
          <div className="new-post_input">
            <textarea
              onChange={props.updatePostText}
              ref={props.newTextPost}
              value={props.newPostText}
            />
            <div className={cont.buttons}></div>
            <button onClick={props.createPost}>create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
