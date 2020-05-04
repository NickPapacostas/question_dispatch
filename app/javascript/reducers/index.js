import { combineReducers } from "redux";
import { SAY_HELLO, FETCH_HELLO, NEW_USER } from "../actions/types";

const basicReducer = (state = null, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return action.hello;
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.data.user;
    default:
      return state;
  }
};

export default combineReducers({
  basic: basicReducer,
  user: userReducer,
});
