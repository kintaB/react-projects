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
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSSAGE:
      console.log(action);
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: "12",
            message: action.message,
          },
        ],
      };

    default:
      return state;
  }
};

export let sendMessage = (message) => {
  return { type: SEND_MESSSAGE, message };
};

export default dialogsReducer;
