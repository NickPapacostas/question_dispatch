import { SAY_HELLO, FETCH_HELLO, NAME_GIVEN } from "./types";

export const sayHello = () => {
  return { type: SAY_HELLO, hello: "hiya!" };
};

export const nameInput = name => {
  return { type: NAME_GIVEN, name };
};

export const fetchHello = () => {
  return dispatch => {
    return fetch("/homepage")
      .then(resp => resp.json)
      .then(json => dispatch({ type: FETCH_HELLO, hello: "hiya!", json: json }))
      .catch(error => console.log(error));
  };
};
