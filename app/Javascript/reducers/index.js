import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";

const basicReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default combineReducers({
  basic: basicReducer
});
