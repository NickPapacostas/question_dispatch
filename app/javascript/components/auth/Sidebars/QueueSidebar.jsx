import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Menu, Layout, Button, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const QueueSidebar = () => {
  const [queues, setQueues] = useState([
    {
      name: "active_questions",
      shortname: "AQ",
      has_unread_messages: true,
    },
    {
      name: "queued_questions",
      shortname: "QQ",
      has_unread_messages: false,
    },
    {
      name: "inactive_questions",
      shortname: "IA",
      has_unread_messages: false,
    },
    {
      name: "resolved_questions",
      shortname: "RQ",
      has_unread_messages: false,
    },
  ]);

  return (
    <Sider theme="light" className="site-layout-background" width={100}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        {queues.map((queue) => (
          <Menu.Item
            key={queue.shortname}
            style={({ marginBottom: "30px" }, { marginTop: "30px" })}
          >
            <Button
              style={{ border: "black" }}
              shape="circle"
              size="large"
              type="primary"
              key={queue.shortname}
            >
              {queue.shortname}
            </Button>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default QueueSidebar;
