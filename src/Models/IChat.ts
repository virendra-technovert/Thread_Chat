import IMessage from "./IMessage";
import IUser from "./IUser";

export default interface IChat {
  content: IMessage[];
  Users?: IUser[];
  chat_Id?: string;
  chat_name: string;
  sendMessage?: (newmessage: IMessage) => void;
  updatecontent?: (newcontent: IMessage[]) => void;
  addMessageToThread?: (
    threadHeadMessage: IMessage,
    newMessage: IMessage
  ) => void;
  convertMessageToThread?: (message: IMessage) => void;
}
