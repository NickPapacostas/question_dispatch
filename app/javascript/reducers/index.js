import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";
import { SAY_HELLO, FETCH_HELLO, NAME_GIVEN } from "../actions/types";

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

const nameReducer = (state = null, action) => {
  switch (action.type) {
    case NAME_GIVEN:
      return action.name;
    default:
      return state;
  }
};
export default combineReducers({
  basic: basicReducer,
  name: nameReducer
});
