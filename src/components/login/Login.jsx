import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="Login" name={"login"} component={"input"} />
        </div>
        <div>
          <Field placeholder="Password" name={"password"} component={"input"} />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
          remember me
        </div>
        <div>
          <button> Login</button>
        </div>
      </form>
    </>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  let onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h1>
        Прежде чем воспользоваться возможностями сайта, нужно авторизоваться
      </h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
