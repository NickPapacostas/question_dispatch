import { combineReducers } from "redux";
import { LOG_IN, NEW_USER } from "../actions/types";

const userReducer = (state = null, action) => {
  console.log("user reducer", action.data);

  switch (action.type) {
    case NEW_USER:
      return action.data.user;
    case LOG_IN:
      return action.data.user;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
