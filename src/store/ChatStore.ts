/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import IChat from "../Models/IChat";
import IMessage from "../Models/IMessage";
import IUser from "../Models/IUser";
import * as _ from "lodash";

const defaultUser: IUser = { userId: "777", displayName: "Harvey Specter" };
const defaultMessages: IMessage[] = [
  {
    messageId: "1",
    sender: defaultUser,
    dateTime: new Date(),
    content: "helllo",
    like: new Set(),
    threads: [],
  },
  {
    messageId: "2",
    sender: defaultUser,
    dateTime: new Date(),
    content: "typeface",
    like: new Set(),
    threads: [],
  },
  {
    messageId: "3",
    sender: defaultUser,
    dateTime: new Date(),
    content: "how youndoin",
    like: new Set(),
    threads: [],
  },
];

export const useChatStore = create<IChat>((set, get) => ({
  chat_name: defaultUser.displayName,
  content: [],

  sendMessage: (newMessage: IMessage) => {
    const existingMessages = get().content;
    if (existingMessages) {
      const newContent = [...existingMessages, newMessage];
      set({ content: newContent });
    } else {
      set({ content: [newMessage] });
    }
  },

  convertMessageToThread: (message: IMessage) => {
    const newMessage = _.cloneDeep(message);
    newMessage.threads.push(newMessage);

    const existingMessages = get().content;
    const index = existingMessages?.findIndex(
      (msg) => msg.messageId === newMessage.messageId
    );
    if (index !== -1 && index) {
      const newExistingMessages = _.cloneDeep(existingMessages) ?? [];
      if (newExistingMessages?.[index]) {
        newExistingMessages[index] = newMessage;
      }
      set({ content: newExistingMessages });
    }
    console.log(
      "after content update after converting the selected message into thread",
      get().content
    );
  },

  addMessageToThread: (threadHeadMessage: IMessage, newMessage: IMessage) => {
    const newThreadHeadMessage = _.cloneDeep(threadHeadMessage);
    newThreadHeadMessage.threads.push(newMessage);

    const existingMessages = get().content ?? [];
    const index = existingMessages.findIndex(
      (msg) => msg.messageId === newThreadHeadMessage.messageId
    );
    if (index !== -1) {
      const newExistingMessages = _.cloneDeep(existingMessages) ?? [];
      if (newExistingMessages?.[index]) {
        newExistingMessages[index] = newThreadHeadMessage;
      }
      set({ content: newExistingMessages });
    }
  },
}));
