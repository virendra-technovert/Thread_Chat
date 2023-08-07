/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Textfield from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import "./ChatForm.scss";
import IMessage from "../../Models/IMessage";
import { useChatStore } from "../../store/ChatStore";
import { nanoid } from "nanoid";
import IUser from "../../Models/IUser";
const defaultUser: IUser = { userId: "1", displayName: "Virendra Dugar" };
const ChatForm = () => {
  const [textMessage, setTextMessage] = useState("");
  const addmessagetochat = useChatStore((state) => state.sendMessage);
  let temp: IMessage;
  const handleClickEvent = () => {
    if (textMessage != "") {
      temp = {
        messageId: nanoid(),
        threads: [],
        content: textMessage,
        dateTime: new Date(),
        sender: defaultUser,
        like: new Set(),
      };
    }
    if (addmessagetochat && textMessage != "") {
      addmessagetochat(temp);
      setTextMessage("");
    }
  };
  const keyPress = (e: string) => {
    if (e == "Enter") {
      handleClickEvent();
    }
  };
  const handlechange = (e: string) => {
    console.log(e);
    setTextMessage(e);
  };

  return (
    <form id="chat-form">
      <Textfield
        value={textMessage}
        onChange={(e) => handlechange(e.target.value)}
        name="messagebox"
        id="outlined-basic"
        variant="outlined"
        onKeyDown={(e) => keyPress(e.key)}
      />
      <IconButton onClick={handleClickEvent} style={{ cursor: "pointer" }}>
        <SendIcon />
      </IconButton>
    </form>
  );
};

export default ChatForm;
