import React from "react";
import ConversationItem from "../conversation-item/ConversationItem";
import "./ConversationList.scss";
import IChat from "../../../Models/IChat";

const ConversationList = (props: {
  chats: Array<IChat>;
  selectedChat: IChat;
}) => {
  const conversationItems = props.chats.map((conversation) => {
    const conversationIsActive =
      conversation.chat_Id == props.selectedChat.chat_Id;
    return (
      <ConversationItem
        key={conversation.chat_Id}
        isActive={conversationIsActive}
        conversation={conversation}
      />
    );
  });

  return <div id="conversation-list">{conversationItems}</div>;
};

export default ConversationList;
