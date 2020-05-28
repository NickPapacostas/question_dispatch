import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import consumer from "../../channels/consumer";
// import HomeNavBar from "../../components/auth/HomeNavBar";
import QueueSidebar from "../../components/QueueSidebar"

import "./Dashboard.css";

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
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="queue-sidebar">
            <QueueSidebar />
          </div>

{/*          <QuestionChatList />
          <ActiveQuestions />*/}
          <div className="current-queue-sidebar"></div>
          <div className="workspace"></div>
        </div>
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
