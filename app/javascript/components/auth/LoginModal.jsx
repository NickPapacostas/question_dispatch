import React, { Component } from "react";
import { loggingIn } from "../../actions/index.js";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      email: "",
      password: "",
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
    this.props.loggingIn(null, data);
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
          LOGIN
        </Button>
        <Modal title="Log In" visible={visible} footer={null}>
          <Form
            name="basic"
            onFinish={this.handleSubmit}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Email"
              name="email"
              onChange={this.handleChange}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              onChange={this.handleChange}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { loggingIn })(LoginModal);
