import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";

import configureStore from "./_store/configureStore";
import "./_css_base/index.css";

export const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
