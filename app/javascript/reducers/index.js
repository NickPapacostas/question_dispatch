import { combineReducers } from "redux";
import {
  LOG_IN,
  NEW_USER,
  ADD_MESSAGE,
  NEW_QUESTION,
  AUTHENTICATE_USER,
} from "../actions/types";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.data.user;
    case LOG_IN:
      console.log("in user reducer", action.data);
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

const questionReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_QUESTION:
      debugger;
      return [...state, action.data];

    default:
      return state;
  }
};

const authReducer = (state = false, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      debugger;
      return [...state, action.data];

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  messages: messageReducer,
  question: questionReducer,
  authenticated: authReducer,
});
