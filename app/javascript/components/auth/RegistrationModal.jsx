import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/index.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class RegistrationModal extends Component {
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
    this.props.loginRegister(event);
    this.props.register(null, data);
  };

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.registerModalShow}
        onHide={this.props.loginRegister}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">SIGN UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="name"
                  name="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  name="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="4" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an email address.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group md="3" controlId="validationCustom04">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group md="3" controlId="validationCustom05">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please match your password exactly.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button name="register" type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default connect(null, { register })(RegistrationModal);
