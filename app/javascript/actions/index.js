import { SAY_HELLO, FETCH_HELLO } from "./types";

export const sayHello = () => {
  return { type: SAY_HELLO, hello: "hiya!" };
};

export const fetchHello = () => {
  return dispatch => {
    return fetch("/homepage")
      .then(resp => resp.json)
      .then(json => dispatch({ type: FETCH_HELLO, hello: "hiya!", json: json }))
      .catch(error => console.log(error));
  };
};
