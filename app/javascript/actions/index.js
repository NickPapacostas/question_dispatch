import { NEW_USER, LOG_IN, ADD_MESSAGE, NEW_QUESTION } from "./types";
import { fetchNewUser, fetchLogIn } from "../adapters";

//USERS############################################################################

export const register = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchNewUser(userData).then((data) => {
      dispatch({ type: NEW_USER, data });
    });
  };
};

export const loggingIn = (dispatch, userData) => {
  console.log("in log in", userData);
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchLogIn(userData).then((data) => {
      dispatch({ type: LOG_IN, data });
    });
  };
};

//CHAT############################################################################

export const addMessage = (msgText) => {
  return { type: ADD_MESSAGE, message: msgText };
};

//QUESTION############################################################################

export const newQuestion = (dispatch, data) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchNewQuestion(data).then((data) => {
      dispatch({ type: NEW_QUESTION, data });
    });
  };
};
