import usersAPI from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  post: [
    { message: "Nigga", id: "1", likeCount: "11" },
    { message: "Wigga", id: "2", likeCount: "12" },
    { message: "Pigga", id: "3", likeCount: "13" },
    { message: "Rigga", id: "4", likeCount: "24" },
  ],
  profile: null,
  newPostText: "Master Yoda",
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: "123",
            message: action.newPost,
            likeCount: "32",
          },
        ],
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default profileReducer;

export let createPost = (newPost) => {
  return { type: ADD_POST, newPost };
};

export let setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export let setUserStatusFromState = (status) => {
  return { type: SET_STATUS, status };
};

export const setUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setUserStatusFromState(response.data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatusFromState(status));
      }
    });
  };
};

export const getUserId = (userId) => {
  return (dispatch) => {
    usersAPI.getUserId(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
