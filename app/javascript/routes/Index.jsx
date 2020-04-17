import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore.js";

const store = configureStore();

export default (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </Provider>
);
