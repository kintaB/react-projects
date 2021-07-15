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
  messages: [
    { message: "Hello Nigger", id: "1" },
    { message: "Hello Wigga", id: "2" },
    { message: "Vape Nic Suck Dick!!!!!", id: "3" },
    { message: "BIG DICK CLUUB!!", id: "4" },
    { message: "SMASH!", id: "5" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: "12",
            message: state.newMessageBody,
          },
        ],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSSAGE_BODY:
      return { ...state, newMessageBody: action.body };
    default:
      return state;
  }
};

export let sendMessage = (object) => {
  return { type: SEND_MESSSAGE, object: object };
};

export let onChangeMessage = (text) => {
  return { type: UPDATE_NEW_MESSSAGE_BODY, body: text.target.value };
};

export default dialogsReducer;
