/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./MessageContainer.scss";
import IMessage from "../../Models/IMessage";
import { useChatStore } from "../../store/ChatStore";
import Message from "../messages/Message";
import { nanoid } from "nanoid";
import { UserStore } from "../../store/UserStore";
import IUser from "../../Models/IUser";
const defaultUser: IUser = { userId: "1", displayName: "Virendra Dugar" };
const MessageContainer = () => {
  const tempcontent = useChatStore((state) => state.content);
  const [content, setContent] = useState(tempcontent);

  //const sentMessages = content.filter(isSentMessage);

  function isSentMessage(x: IMessage) {
    return x.sender.userId == UserStore((state) => state.userId);
  }
  const [sentMessage, setSentMessage] = useState<Array<IMessage>>([]);
  const [RecievedMessage, setRecievedMessage] = useState([]);

  const filterSentMessage = () => {
    return content.filter((x) => {
      x.sender.displayName == defaultUser.displayName;
    });
  };

  useEffect(() => {
    setContent(tempcontent);
  }, [tempcontent]);
  console.log(content, "from message container ");
  return (
    <div className="message-container">
      <div className="messages">
        <div className="incoming-message">
          {/* {content?.map((x: IMessage) => {
            return (
              <Message
                aThreadedReply={false}
                key={x.messageId}
                isMyMessage={false}
                message={x}
              />
            );
          })} */}
        </div>
        <div className="message-body"></div>
        <div className="replies">
          {content?.map((x: IMessage) => {
            return (
              <Message
                aThreadedReply={false}
                key={x.messageId}
                isMyMessage={true}
                message={x}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MessageContainer;
