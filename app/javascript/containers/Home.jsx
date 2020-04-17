import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  handleHelloClick = () => {
    this.props.sayHello();
  };

  handleNameClick = () => {
    console.log(this.state.name);
    this.props.nameInput(this.state.name);
  };

  nameInput = e => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    return (
      <div className="home-container">
        Hey there{this.props.name ? ` ${this.props.name}!` : "!"}
        <br />
        {this.props.basic ? this.props.basic : null}
        <br />
        <button onClick={this.handleHelloClick}>Say Hello Back!</button>
        <br />
        <br />
        <br />
        <input value={this.state.name} onChange={this.nameInput} />
        <button onClick={this.handleNameClick}>Give us your name!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    basic: state.basic,
    name: state.name
  };
};
export default connect(mapStateToProps, actions)(Home);
