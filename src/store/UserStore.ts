import { create } from "zustand";
import IUser from "../Models/IUser";

export const UserStore = create<IUser>((set) => ({
  userId: "1",
  displayName: "Virendra Dugar",
  addDisplayName: (newdisplayname: string) => {
    set({ displayName: newdisplayname });
  },
}));
