import React, { Component, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Button } from "antd";
import logo from "../../qdLogo.jpg";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
const { Header } = Layout;

class HomeNavBar extends Component {
  render() {
    return (
      <div>
        <Header style={{ background: "blue" }}>
          <img
            style={{ width: "50px", float: "left", margin: "10px" }}
            src={logo}
          />
          <LoginModal />
          <RegistrationModal />
        </Header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps)(HomeNavBar));

// const user = this.props.user;
//     if (user == null) {
//       return (
//         <div className="navBar">
//           <Navbar bg="dark" color="white" variant="dark">
//             <Navbar.Brand href="/">
//               <img alt="" width="50px" className="bounce_button" src={logo} />
//             </Navbar.Brand>
//             <Nav className="ml-auto">
//               <Nav.Link name="logIn" onClick={this.props.loginRegister}>
//                 Login
//               </Nav.Link>
//               <Nav.Link name="register" onClick={this.props.loginRegister}>
//                 Sign Up
//               </Nav.Link>
//             </Nav>
//           </Navbar>
//         </div>
//       );
//     } else {
//       return (
//         <div className="navBar">
//           <Navbar bg="dark" color="white" variant="dark">
//             <Navbar.Brand href="/">
//               <img alt="" width="50px" className="bounce_button" src={logo} />
//             </Navbar.Brand>
//             <Navbar.Brand className="ml-auto" href="/">
//               <p>
//                 Welcome{" "}
//                 {user.first_name.charAt(0).toUpperCase() +
//                   user.first_name.slice(1)}
//                 !
//               </p>
//             </Navbar.Brand>
//           </Navbar>
//         </div>
//       );
