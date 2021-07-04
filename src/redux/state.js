const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const UPDATE_NEW_MESSSAGE_BODY = "UPDATE-NEW-MESSSAGE-BODY";
const SEND_MESSSAGE = "SEND-MESSSAGE";

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
    DialogsPage: {
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
    if (action.type === ADD_POST) {
      let postObj = {
        id: action.object.id,
        message: store._state.profilePage.newPostText,
        likeCount: action.object.likeCount,
      };
      this._state.profilePage.post.push(postObj);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
      return this;
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSSAGE_BODY) {
      this._state.DialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSSAGE) {
      let messageObject = {
        id: action.object.id,
        message: store._state.DialogsPage.newMessageBody,
      };
      this._state.DialogsPage.message.push(messageObject);
      this._state.DialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    }
  },
};

export let addPostActionCreator = (object) => {
  return { type: ADD_POST, object: object };
};

export let updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, newText: text };
};

export let sendMessageCreator = (object) => {
  return { type: SEND_MESSSAGE, object: object };
};

export let updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSSAGE_BODY, body: text };
};
export default store;
window.this = store;
