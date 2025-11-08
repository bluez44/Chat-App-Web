import ChatDetail from "../../components/chat/ChatDetail";
import ChatList from "../../components/chat/ChatList";

function Chats() {
  return (
    <div className="flex h-screen">
      <div className="bg-[var(--chat-bg)] flex-1 p-2 flex flex-col border-r border-[var(--btn-border)]">
        <ChatList />
      </div>

      <div className="bg-black flex-4">
        <div className="bg-[var(--chat-bg)] h-full">
          <ChatDetail />
        </div>
      </div>
    </div>
  );
}

export default Chats;
