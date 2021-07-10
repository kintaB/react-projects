const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  post: [
    { message: "Nigga", id: "1", likeCount: "11" },
    { message: "Wigga", id: "2", likeCount: "12" },
    { message: "Pigga", id: "3", likeCount: "13" },
    { message: "Rigga", id: "4", likeCount: "24" },
  ],
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
