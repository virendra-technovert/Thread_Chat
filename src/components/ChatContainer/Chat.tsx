import MessageContainer from "../MessageContainer/MessageContainer";
import ChatTitle from "../../components/chat-title/ChatTitle";
import ChatForm from "../../components/chat-form/ChatForm";
import "./Chat.scss";
import ConversationSearch from "../conversation/conversation-search/ConversationSearch";
import ConversationList from "../conversation/conversation-list/ConversationList";
import NewConversation from "../conversation/NewConversationContainer/NewConversation";
import IUser from "../../Models/IUser";
import IMessage from "../../Models/IMessage";
import GenerateUniqueIdentifier from "../../util/util";
const defaultUser: IUser = { userId: "777", displayName: "Harvey Specter" };
const defaultUser2: IUser = { userId: "333", displayName: "Mike Ross" };
const defaultUser3: IUser = { userId: "888", displayName: "Jessica Pearson" };
const defaultMessages: IMessage[] = [
  {
    messageId: "90999",
    sender: defaultUser,
    dateTime: new Date(),
    content: "helllo",
    like: new Set(),
    threads: [],
  },
  {
    messageId: "27878",
    sender: defaultUser,
    dateTime: new Date(),
    content: "typeface",
    like: new Set(),
    threads: [],
  },
  {
    messageId: "368282",
    sender: defaultUser,
    dateTime: new Date(),
    content: "how youndoin",
    like: new Set(),
    threads: [],
  },
];

const Chat = () => {
  return (
    <div id="chat-container">
      <ConversationSearch
        conversations={[
          { chat_name: defaultUser.displayName, content: [] },
          {
            chat_name: defaultUser2.displayName,
            content: defaultMessages.splice(1),
          },
          { chat_name: defaultUser3.displayName, content: defaultMessages },
        ]}
      />
      <ConversationList
        chats={[
          {
            chat_name: defaultUser.displayName,
            content: [],
            chat_Id: "12345",
          },
          {
            chat_name: defaultUser2.displayName,
            chat_Id: GenerateUniqueIdentifier(),
            content: defaultMessages.splice(2),
          },
          {
            chat_name: defaultUser3.displayName,
            chat_Id: GenerateUniqueIdentifier(),
            content: defaultMessages,
          },
        ]}
        selectedChat={{
          content: defaultMessages,
          chat_Id: "12345",
          chat_name: defaultUser.displayName,
        }}
      />
      <NewConversation />
      <ChatTitle />
      <MessageContainer />
      <ChatForm />
    </div>
  );
};

export default Chat;
