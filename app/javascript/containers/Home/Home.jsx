import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Registration from "../../components/auth/Registration";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.user != {} ? this.props.history.push("/dashboard") : null;
  };

  loginRegister = () => {
    event.target.name == "logIn"
      ? this.props.history.push("/login")
      : this.props.history.push("/register");
  };

  render() {
    return (
      <div className="home-container">
        <h1>Welcome to Question Dispatch</h1>
        <button name="logIn" onClick={this.loginRegister}>
          Log In
        </button>
        <button name="register" onClick={this.loginRegister}>
          Sign Up
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, actions)(Home);
