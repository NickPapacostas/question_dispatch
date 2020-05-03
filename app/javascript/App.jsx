import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";
import Dashboard from "./containers/Dashboard/Dashboard";
import Registration from "./components/auth/Registration";
import LogIn from "./components/auth/LogIn";

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }

  loggingIn = () => {
    this.props.user != {}
      ? this.setState({ loggedInStatus: "LOGGED_IN" })
      : null;
  };

  render() {
    return (
      <div className="app">
        <Provider store={store}>
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
                path="/register"
                render={(props) => (
                  <Registration
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />

              <Route
                exact
                path="/login"
                render={(props) => (
                  <LogIn
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
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
