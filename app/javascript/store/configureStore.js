import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";
// import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(reduxThunk));
};

export default configureStore;
