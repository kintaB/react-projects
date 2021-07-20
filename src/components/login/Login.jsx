import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../command/formsControll/formsControll";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Type your login"
            name={"login"}
            validate={[requiredField]}
            component={Input}
          />
        </div>
        <div>
          <Field
            placeholder="Type your password"
            name={"password"}
            validate={[requiredField]}
            component={Input}
          />
        </div>
        <div>
          <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
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
