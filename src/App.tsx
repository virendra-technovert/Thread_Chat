/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import IChat from "./Models/IChat";
import IMessage from "./Models/IMessage";
import IUser from "./Models/IUser";
import Chat from "./components/ChatContainer/Chat";
import "./App.css";
import { useChatStore } from "./store/ChatStore";
import { nanoid } from "nanoid";
import { shallow } from "zustand/shallow";
import CustomPanel from "./components/ThreadChatPanel/CustomPanel";

function App() {
  return (
    <>
      <Chat />
      <CustomPanel />
    </>
  );
}

export default App;
