import { NEW_USER, LOG_IN, ADD_MESSAGE } from "./types";
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
  console.log("in log in", userData);
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    logIn(userData).then((data) => {
      dispatch({ type: LOG_IN, data });
    });
  };
};

//CHAT############################################################################

export const addMessage = (msgText) => {
  return { type: ADD_MESSAGE, message: msgText };
};
