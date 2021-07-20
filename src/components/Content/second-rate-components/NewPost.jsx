import React from "react";
import { Field, reduxForm } from "redux-form";
import cont from "../../Content/Content.module.css";

const NewPost = (props) => {
  let onSubmit = (values) => {
    props.createPost(values.newPost);
  };

  return (
    <>
      <div className="new-post">
        <div className={cont.newPostTitle}>My posts</div>
        <div className="new-post_create">
          <NewPostReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

const NewPostForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newPost"} />
        <div>
          <button>Create Post</button>
        </div>
      </form>
    </>
  );
};

const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPostForm);

export default NewPost;
