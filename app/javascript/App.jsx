import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./contaiers/Home.jsx";
import configureStore from "../store/configureStore";

export const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {console.log("here we are")}
          <Switch>
            <Route exact path="/" render={() => <Home name="Kat" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
