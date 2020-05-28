import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/index.js";

import { Modal, Button } from "antd";
import { Form, Input } from "antd";
class RegistrationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registration_errors: "",
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  handleChange = () => {
    console.log("in change");

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    event.preventDefault();
    console.log("in submit");

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
    this.props.register(null, data);
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button
          type="primary"
          style={{ margin: "15px", float: "right" }}
          onClick={this.showModal}
        >
          SIGN UP
        </Button>
        <Modal title="Sign Up" visible={visible} footer={null}>
          <Form onFinish={this.handleSubmit} initialValues={{ remember: true }}>
            <Form.Item
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name." },
              ]}
            >
              <Input name="first_name" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name." },
              ]}
            >
              <Input name="last_name" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[{ required: true, message: "Please input your email." }]}
            >
              <Input name="email" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Password"
              rules={[
                { required: true, message: "Please input your password." },
              ]}
            >
              <Input.Password name="password" onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="Password Confirmation"
              rules={[
                { required: true, message: "Please match your password." },
              ]}
            >
              <Input.Password
                name="password_confirmation"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button name="register" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { register })(RegistrationModal);
