import { stopSubmit } from "redux-form";
import usersAPI, { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, data: { id, email, login, isAuth } };
};

export const setAuth = () => {
  return (dispatch) => {
    usersAPI.authAccept().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuth());
      } else {
        let action = stopSubmit("login", { email: "email is wrong" });
        console.log(action);
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
