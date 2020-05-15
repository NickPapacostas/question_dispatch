import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loggingIn } from "../../actions/index.js";
import { connect } from "react-redux";

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = () => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    event.preventDefault();

    const { email, password } = this.state;
    let data = {
      user: {
        email,
        password,
      },
    };
    this.props.closeLogin();
    this.props.loggingIn(null, data);
  };

  render() {
    return (
      <Modal
        show={this.props.loginModalShow}
        name="logIn"
        onHide={this.props.closeLogin}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">LOG IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Log In</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(null, { loggingIn })(LoginModal);
