import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import consumer from "../../channels/consumer";
// import HomeNavBar from "../../components/auth/HomeNavBar";
import QueueSidebar from "../../components/auth/Sidebars/QueueSidebar";
import { Layout, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import "./Dashboard.css";
import HomeNavBar from "../../components/auth/HomeNavBar";
import QuestionQueueSidebar from "../../components/auth/Sidebars/QuestionsQueueSidebar";
import Chat from "../../components/auth/chatComponents/Chat";
import NewQuestionModal from "../../components/auth/questionComponents/NewQuestionModal";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   consumer.subscriptions.create(
  //     { channel: "QuestionChannel" },
  //     {
  //       received: (data) => {
  //         console.log(data);
  //       },
  //     }
  //   );
  // }

  render() {
    return (
      <Layout className="dashboard-container">
        <HomeNavBar />
        <Layout>
          <QueueSidebar />
          <QuestionQueueSidebar />
          <NewQuestionModal />
        </Layout>
      </Layout>
    );
  }
}
// <Content>
//   <Chat />
// </Content>

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
