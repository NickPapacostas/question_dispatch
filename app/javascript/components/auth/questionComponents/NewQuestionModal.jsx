import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { Form, Input } from "antd";
import { useState, useEffect } from "react";
import { fetchNewQuestion } from "../../../adapters/index";

const NewQuestionModal = (props) => {
  const [visible, setVisibility] = useState(false);
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = () => {
    let name = event.target.classList[1];
    let value = event.target.value;

    switch (name) {
      case "description":
        setDescription(value);
      case "code":
        setCode(value);
      case "error":
        setError(value);
    }
  };

  const handleSubmit = () => {
    event.preventDefault();

    let userId = props.user.id;
    let questionData = {
      user_id: userId,
      description,
      snippets: [
        { rich_text: code, userId },
        { rich_text: error, userId },
      ],
    };
    fetchNewQuestion(questionData);
    setDescription("");
    setCode("");
    setError("");
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ margin: "15px", float: "right" }}
        onClick={() => setVisibility(true)}
      >
        NEW QUESTION
      </Button>
      <Modal
        onCancel={() => setVisibility(false)}
        title="New Question"
        visible={visible}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={handleSubmit}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input a description of your question.",
              },
            ]}
          >
            <Input className="description" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Current Code">
            <Input className="code" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Current Error">
            <Input className="error" onChange={handleChange} />
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
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, { fetchNewQuestion })(NewQuestionModal);
