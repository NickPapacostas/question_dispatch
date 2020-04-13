import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import SAY_HELLO from "./actions/types";

const basicReducer = (state = null, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return action.hello;
    case FETCH_HELLO:
      return action.json;
    default:
      return state;
  }
};
export default combineReducers({
  basic: basicReducer
});
