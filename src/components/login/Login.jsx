import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators/validators";
import { Input } from "../command/formsControll/formsControll";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Login"
            name={"email"}
            validate={[requiredField]}
            component={Input}
          />
        </div>
        <div>
          <Field
            type={"password"}
            placeholder="Password"
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

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <>
      <h1>
        Прежде чем воспользоваться возможностями сайта, нужно авторизоваться
      </h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

export default connect(mapStateToProps, { login })(Login);
