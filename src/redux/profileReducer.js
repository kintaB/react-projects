import usersAPI from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  post: [
    { message: "Nigga", id: "1", likeCount: "11" },
    { message: "Wigga", id: "2", likeCount: "12" },
    { message: "Pigga", id: "3", likeCount: "13" },
    { message: "Rigga", id: "4", likeCount: "24" },
  ],
  profile: null,
  newPostText: "Master Yoda",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: "",
        post: [
          ...state.post,
          {
            id: action.object.id,
            message: state.newPostText,
            likeCount: action.object.likeCount,
          },
        ],
      };
    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export default profileReducer;

export let addPostActionCreator = (object) => {
  return { type: ADD_POST, object: object };
};

export let updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, newText: text };
};

export let setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getUserId = (userId) => {
  return (dispatch) => {
    usersAPI.getUserId(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
