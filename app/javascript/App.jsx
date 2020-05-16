import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import Dashboard from "./containers/Dashboard/Dashboard";
import './App.css';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Home {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              <Route
                exact
                path="/dashboard"
                render={(props) => (
                  <Dashboard
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
