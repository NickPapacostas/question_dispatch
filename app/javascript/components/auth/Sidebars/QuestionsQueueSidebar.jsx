import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Menu, Layout, Button, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const QuestionQueueSidebar = () => {
  return (
    <Sider
      style={{ backgroundColor: "#6495ED" }}
      className="site-layout-background"
      width={100}
    ></Sider>
  );
};

export default QuestionQueueSidebar;
