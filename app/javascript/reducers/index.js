import { combineReducers } from "redux";
import { LOG_IN, NEW_USER, ADD_MESSAGE } from "../actions/types";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.data.user;
    case LOG_IN:
      return action.data.user;
    default:
      return state;
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      console.log("in message reducer", action.message);
      return [...state, action.message];

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  messages: messageReducer,
});
