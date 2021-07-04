import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      post: [
        { message: "Nigga", id: "1", likeCount: "11" },
        { message: "Wigga", id: "2", likeCount: "12" },
        { message: "Pigga", id: "3", likeCount: "13" },
        { message: "Rigga", id: "4", likeCount: "24" },
      ],
      newPostText: "Master Yoda",
    },
    dialogsPage: {
      friends: [
        { name: "Alla", id: "1" },
        { name: "Dima", id: "2" },
        { name: "Vanya", id: "3" },
        { name: "Sergey", id: "4" },
        { name: "Scheff", id: "5" },
      ],
      message: [
        { message: "Hello Nigger", id: "1" },
        { message: "Hello Wigga", id: "2" },
        { message: "Vape Nic Suck Dick!!!!!", id: "3" },
        { message: "BIG DICK CLUUB!!", id: "4" },
        { message: "SMASH!", id: "5" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  //TODO: add function which update message array on UI side
  dispatch(action) {
    this._state.profilePage = profileReducer(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
    this._state.sidebar = sidebarReducer(action, this._state.sidebar);

    this._callSubscriber(this._state);
  },
};

export default store;
window.this = store;
