import { NEW_USER, LOG_IN } from "./types";
import { newUser, logIn } from "../adapters";

//USERS############################################################################

export const register = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    newUser(userData).then((data) => {
      dispatch({ type: NEW_USER, data });
    });
  };
};

export const loggingIn = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    logIn(userData).then((data) => {
      dispatch({ type: LOG_IN, data });
    });
  };
};
