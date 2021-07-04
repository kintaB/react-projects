const UPDATE_NEW_MESSSAGE_BODY = "UPDATE-NEW-MESSSAGE-BODY";
const SEND_MESSSAGE = "SEND-MESSSAGE";

let initState = {
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
};

const dialogsReducer = (state = initState, action) => {
  let messageObject = {
    id: "",
    message: "",
  };
  switch (action.type) {
    case SEND_MESSSAGE:
      messageObject = {
        id: action.object.id,
        message: state.newMessageBody,
      };
      state.message.push(messageObject);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export let sendMessageCreator = (object) => {
  return { type: SEND_MESSSAGE, object: object };
};

export let updateNewMessageBodyCreator = (text) => {
  return { type: UPDATE_NEW_MESSSAGE_BODY, body: text };
};

export default dialogsReducer;
