/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { nanoid } from "nanoid";
import IUser from "../Models/IUser";
import IMessage from "../Models/IMessage";
interface IThreadChatStore {
  isPanelOpen: boolean;
  threadMessageHead: IMessage | null;
  setIsPanelOpen: (res: boolean) => void;
  setThreadMessageHead: (res: IMessage) => void;
}
export const useThreadStore = create<IThreadChatStore>((set, get) => ({
  isPanelOpen: false,
  threadMessageHead: null,
  setIsPanelOpen: (res: boolean) => {
    set({ isPanelOpen: res });
  },
  setThreadMessageHead: (res: IMessage) => {
    set({ threadMessageHead: res });
  },
}));
