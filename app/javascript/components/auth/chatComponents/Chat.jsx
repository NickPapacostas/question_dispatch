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

class Chat extends Component {
  render() {
    const messages = this.props.messages;
    const messageGroups = messages.map((message) => {
      <MessageGroup>
        <Message>
          {message.text}
          <MessageText></MessageText>
        </Message>
      </MessageGroup>;
    });
    return (
      <ThemeProvider>
        <FixedWrapper.Root maximizedOnInit>
          <FixedWrapper.Maximized>
            <MessageList active>{messageGroups}</MessageList>
            <TextComposer
              onSend={(message) => this.props.addMessage({ text: message })}
            >
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
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};
export default connect(mapStateToProps, actions)(Chat);
