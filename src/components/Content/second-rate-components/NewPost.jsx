import React from "react";
import { Field, reduxForm } from "redux-form";
import cont from "../../Content/Content.module.css";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../command/formsControll/formsControll";

const maxLength15 = maxLengthCreator(15);

const NewPost = (props) => {
  let onSubmit = (values) => {
    props.createPost(values.newPost);
  };
  return (
    <>
      <div className={cont.newPost}>
        <div className={cont.newPostTitle}>My posts</div>
        <div className={cont.newPostCreate}>
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
        <Field
          component={Textarea}
          name={"newPost"}
          validate={[requiredField, maxLength15]}
        />
        <div>
          <button>Create Post</button>
        </div>
      </form>
    </>
  );
};

const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPostForm);

export default NewPost;
