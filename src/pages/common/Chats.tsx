import ChatList from "../../components/chat/ChatList";
import MessagePanel from "../../components/message/MessagePanel";

function Chats() {
  return (
    <div className="flex h-screen">
      <div className="bg-[var(--chat-bg)] flex-1 p-2 flex flex-col gap-4">
        <ChatList />
      </div>

      <div className="bg-black flex-4 p-2">
        <div className="bg-[var(--chat-bg)] h-full rounded-xl">
          <MessagePanel />
        </div>
      </div>
    </div>
  );
}

export default Chats;
