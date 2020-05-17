import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import configureStore from 'redux-mock-store';

import Dashboard from "../../../app/javascript/containers/Dashboard/Dashboard"

const mockStore = configureStore([]);

let store;
let container = null;

beforeEach(() => {
  store = mockStore({
    myState: 'sample text',
  });

  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  store = null;
})

it("renders a list of queue buttons", () => {
  act(() => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
      container
    );
  })

  const queueButtonTest = ["AQ", "QQ", "IA", "RQ"]
  queueButtonTest
    .forEach( bt => expect(container.textContent)
    .toMatch(bt))
})