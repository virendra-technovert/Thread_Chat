import IUser from "./IUser";
export default interface IMessage {
  /**
   * Unique Identifier for your message
   */
  messageId: string;
  /**
   * Content of the message
   */
  content: string;
  sender: IUser;
  threads: IMessage[]; // What is the threadHead if any? This defines the starting point of the head
  like: Set<IUser>;
  dateTime: Date;
}
