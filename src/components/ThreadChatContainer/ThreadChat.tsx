/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

import IMessage from "../../Models/IMessage";
import Textfield from "@mui/material/TextField";
import { useChatStore } from "../../store/ChatStore";
import Message from "../messages/Message";
import { shallow } from "zustand/shallow";
import "./ThreadChat.scss";
import { nanoid } from "nanoid";
import IUser from "../../Models/IUser";
import IChat from "../../Models/IChat";
interface IThreadChat {
  threadHeadMessage: string;
}
const defaultUser: IUser = { userId: nanoid(), displayName: "Virendra Dugar" };
const temp: IMessage = {
  messageId: nanoid(),
  content: "",
  sender: defaultUser,
  threads: [], // What is the threadHead if any? This defines the starting point of the head
  like: new Set(),
  dateTime: new Date(),
};
const ThreadChat = (props: IThreadChat) => {
  const [messageToAdd, setMessageToAdd] = useState<string>("");
  const convertMessageToThread = useChatStore(
    (state) => state.convertMessageToThread
  );
  const currentChat: Array<IMessage> = useChatStore((state) => state.content);

  const threadHeadMessage = currentChat.find(
    (msg) => msg.messageId == props.threadHeadMessage
  );

  const AddMessageToThread = useChatStore((state) => state.addMessageToThread);
  const tempcontent = threadHeadMessage?.threads;

  console.log(tempcontent, "temp");
  const [content, setContent] = useState(tempcontent);
  useEffect(() => {
    setContent(tempcontent);
  }, [tempcontent]);

  const handlechange = (e: string) => {
    console.log(e);
    setMessageToAdd(e);
  };
  const addMessageToThread = () => {
    const newmessage = messageGenerator();
    if (
      AddMessageToThread &&
      threadHeadMessage &&
      threadHeadMessage.content != ""
    )
      AddMessageToThread(threadHeadMessage, newmessage);
    setMessageToAdd("");
  };
  const keyPress = (e: string) => {
    if (e == "Enter") {
      addMessageToThread();
    }
  };
  const messageGenerator = () => {
    const temp: IMessage = {
      messageId: nanoid(),
      content: messageToAdd,
      sender: defaultUser,
      threads: [], // What is the threadHead if any? This defines the starting point of the head
      like: new Set(),
      dateTime: new Date(),
    };
    return temp;
  };

  return (
    <div className="chat-container">
      <div className="message">
        <div className="message-header">
          {threadHeadMessage ? (
            <Message
              aThreadedReply={false}
              key={threadHeadMessage?.messageId}
              isMyMessage={false}
              message={threadHeadMessage}
            />
          ) : (
            ""
          )}
        </div>
        <div className="message-body"></div>
        <div className="replies">
          {content
            ? content.map((x: IMessage) => {
                return (
                  <Message
                    aThreadedReply={true}
                    key={x.messageId}
                    isMyMessage={true}
                    message={x}
                  />
                );
              })
            : ""}
        </div>
        <div className="input-container">
          <Textfield
            onChange={(e) => handlechange(e.target.value)}
            value={messageToAdd}
            type="text"
            style={{ minWidth: "90%" }}
            id="message-input"
            onKeyDown={(e) => keyPress(e.key)}
            placeholder="Type your message..."
          />
          <button onClick={addMessageToThread} className="reply-button">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThreadChat;
