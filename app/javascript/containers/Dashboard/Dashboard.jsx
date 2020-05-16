import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import consumer from "../../channels/consumer";
import HomeNavBar from "../../components/auth/HomeNavBar";

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
        <HomeNavBar/>

        <div className="dashboard-container">
          <div className="queue-sidebar">
            <div className="queue-sidebar-buttons">
              <button>AQ</button>
              <button>QQ</button>
              <button>IA</button>
              <button>RQ</button>
            </div>
          </div>
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
