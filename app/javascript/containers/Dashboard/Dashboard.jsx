import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>Welcome! {this.props.user != {} ? this.props.user.name : null}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
