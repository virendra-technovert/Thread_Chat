/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { useChatStore } from "../../store/ChatStore";
import "./Message.scss";

import IMessage from "../../Models/IMessage";
import { registerIcons } from "@fluentui/react/lib/Styling";
import { CancelIcon } from "@fluentui/react-icons-mdl2";
import UserProfile from "../UserProfile/UserProfile";
import { useThreadStore } from "../../store/ThreadChatStore";
function Message(props: {
  isMyMessage: boolean;
  message: IMessage;
  aThreadedReply: boolean;
}) {
  useEffect(() => {
    console.log("newmessagerendered");
  }, []);

  const updateChat = useChatStore((set) => set.updatecontent);
  const openPanel = useThreadStore((state) => state.setIsPanelOpen);
  const setThreadMessage = useThreadStore(
    (state) => state.setThreadMessageHead
  );
  const convertMessageToThread = useChatStore(
    (state) => state.convertMessageToThread
  );

  const messageClass = classNames("message-row", {
    "you-message": props.isMyMessage,
    "other-message": !props.isMyMessage,
  });
  const oldchat = useChatStore((state) => state.content);
  const newchat = oldchat;
  const replyToThread = () => {
    setThreadMessage(props.message);
    openPanel(true);
  };

  const imageThumbnail = props.isMyMessage ? null : <img />;

  return (
    <div key={props.message.messageId} className={messageClass}>
      <div className="message-content">
        <UserProfile displayName={props.message.sender.displayName} />
        <div className="message-text">
          {props.message.content}
          {props.aThreadedReply ? (
            ""
          ) : (
            <div className="reply-to-thread-button" onClick={replyToThread}>
              Reply To Thread
            </div>
          )}
        </div>

        <div className="message-time">
          {props.message.dateTime.toDateString()}
        </div>

        {props?.message.threads[0] == undefined ? (
          " "
        ) : (
          <p className="thread-replies" onClick={replyToThread}>
            {props.message.threads.length} + Replies
          </p>
        )}
      </div>
    </div>
  );
}

export default Message;
