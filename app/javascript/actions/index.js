import { SAY_HELLO, FETCH_HELLO, NEW_USER } from "./types";
import { newUser } from "../adapters";

export const register = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    newUser(userData).then((data) => {
      dispatch({ type: NEW_USER, data });
    });
  };
};
