import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import logo from "../../fullLogo.png";
import HomeNavBar from "../../components/auth/HomeNavBar";
import LoginModal from "../../components/auth/LoginModal";
import RegistrationModal from "../../components/auth/RegistrationModal";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShow: false,
      registerModalShow: false,
    };
  }

  // componentDidMount = () => {
  //   this.props.user != null ? this.props.history.push("/dashboard") : null;
  // };

  closeLogin = () => {
    this.setState({ loginModalShow: false });
  };

  loginRegister = () => {
    event.target.name == "logIn"
      ? this.setState({ loginModalShow: !this.state.loginModalShow })
      : this.setState({ registerModalShow: !this.state.registerModalShow });
  };

  render() {
    return (
      <div align="center" className="home-container">
        <Layout>
          <HomeNavBar loginRegister={this.loginRegister} />
          <Layout>
            <Sider>Sider</Sider>
            <Content>
              <img src={logo} />
            </Content>
          </Layout>
        </Layout>
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

// {this.state.loginModalShow ? (
//   <LoginModal
//     closeLogin={this.closeLogin}
//     loginModalShow={this.state.loginModalShow}
//   />
// ) : null}
// {this.state.registerModalShow ? (
//   <RegistrationModal
//     registerModalShow={this.state.registerModalShow}
//     loginRegister={this.loginRegister}
//   />
// ) : null}
// {this.state.loginModalShow == false &&
// this.state.registerModalShow == false ? (
//   <div className="welcome-message">
//     <img src={logo} />
//   </div>
// ) : null}
