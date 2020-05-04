import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/index.js";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: "",
    };
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    event.preventDefault();

    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    } = this.state;
    let data = {
      user: {
        first_name,
        last_name,
        email,
        password,
        password_confirmation,
      },
    };
    this.props.register(null, data);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <h1>Sign Up!</h1>
        <h2>User?</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="name"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="name"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <button type="submit" onClick={this.handleSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { register })(Registration);
