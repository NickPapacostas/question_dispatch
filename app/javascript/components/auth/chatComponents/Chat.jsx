import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { ThemeProvider, FixedWrapper } from "@livechat/ui-kit";
import {
  Avatar,
  TitleBar,
  TextInput,
  MessageList,
  Message,
  MessageText,
  AgentBar,
  Title,
  Subtitle,
  MessageGroup,
  MessageButtons,
  MessageButton,
  MessageTitle,
  MessageMedia,
  TextComposer,
  Row,
  Fill,
  Fit,
  IconButton,
  SendButton,
  EmojiIcon,
  CloseIcon,
  Column,
  RateGoodIcon,
  RateBadIcon,
  Bubble,
} from "@livechat/ui-kit";
import { Form, Input } from "antd";

const Chat = ({ messages, addMessage }) => {
  if (messages.length) {
    return (
      <ThemeProvider>
        <FixedWrapper.Root maximizedOnInit style={{ marginBottom: "150px" }}>
          <FixedWrapper.Maximized>
            <MessageList active containScrollInSubtree>
              {messages.map((message, index) => (
                <MessageGroup key={index}>
                  <Bubble>
                    <Message>
                      <MessageText>{message.text}</MessageText>
                    </Message>
                  </Bubble>
                </MessageGroup>
              ))}
            </MessageList>
            <TextComposer onSend={(message) => addMessage({ text: message })}>
              <Row align="center">
                <Fill>
                  <TextInput />
                </Fill>
                <Fit>
                  <SendButton />
                </Fit>
              </Row>
            </TextComposer>
          </FixedWrapper.Maximized>
        </FixedWrapper.Root>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider>
        <FixedWrapper.Root maximizedOnInit style={{ marginBottom: "150px" }}>
          <FixedWrapper.Maximized>
            <MessageList>
              <MessageGroup>
                <Message style={{ width: "100%" }}>
                  <TitleBar title="ASK US A QUESTION" />

                  <TextComposer>
                    <MessageTitle title="Your Question:" />
                    <TextInput />
                  </TextComposer>
                  <TextComposer>
                    <MessageTitle title="Your Code:" />
                    <TextInput />
                  </TextComposer>
                  <TextComposer>
                    <MessageTitle title="Your Error:" />
                    <TextInput />
                  </TextComposer>
                  <MessageButton
                    label="Send Question"
                    style={{ backgroud: "blue" }}
                    onClick={(event) => {
                      console.log(event.target.parentElement.children);
                    }}
                  />
                </Message>
              </MessageGroup>
            </MessageList>
          </FixedWrapper.Maximized>
        </FixedWrapper.Root>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};
export default connect(mapStateToProps, actions)(Chat);
