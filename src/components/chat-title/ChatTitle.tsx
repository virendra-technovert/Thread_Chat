import React from "react";
import "./ChatTitle.scss";
import { useChatStore } from "../../store/ChatStore";


export default function ChatTitle() {
  const title = useChatStore(state => state.chat_name)
  return <div id="chat-title">{title}</div>;
}
