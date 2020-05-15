import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import consumer from "../../channels/consumer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    consumer.subscriptions.create(
      { channel: "QuestionChannel" },
      {
        received: (data) => {
          console.log(data);
        },
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>
          Welcome! {this.props.user != null ? this.props.user.first_name : null}
        </h2>
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
