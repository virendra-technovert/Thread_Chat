import React from "react";
import classNames from "classnames";
import "./ConversationItem.scss";
import UserProfile from "../../UserProfile/UserProfile";
import IChat from "../../../Models/IChat";

const ConversationItem = (props: {
  conversation: IChat;
  isActive: boolean;
}) => {
  const className = classNames("conversation", {
    active: props.isActive,
  });
  const lastMessageIndex = props.conversation.content?.length;
  let lastMessage;
  if (props.conversation.content && lastMessageIndex) {
    lastMessage = props.conversation.content[lastMessageIndex - 1];
  }
  return (
    <div className={className}>
      <div className="user-details">
        <UserProfile displayName={props.conversation.chat_name} />
        <div className="title-text"> </div>

        <div className="conversation-message">
          <p> {lastMessage?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
