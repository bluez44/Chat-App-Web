import { Ellipsis, Search, SquarePen } from "lucide-react";
import ChatPreview from "../../components/ChatPreview";
import { chatPreviews } from "../../constant/mock/chatPreview";

function Chats() {
  return (
    <div className="flex h-screen">
      <div className="bg-[var(--chat-bg)] flex-1 p-2 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-semibold">Messages</h1>
          <div className="flex gap-4 text-white">
            <button className="rounded-full p-2 bg-[var(--btn-border)] hover:bg-[var(--btn-border-hover)] hover:cursor-pointer duration-100">
              <Ellipsis />
            </button>
            <button className="rounded-full p-2 bg-[var(--btn-border)] hover:bg-[var(--btn-border-hover)] hover:cursor-pointer duration-100">
              <SquarePen />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="h-full">
            <Search className="text-white bg-[var(--btn-border)] p-2 h-full w-10 rounded-s-xl" />
          </div>
          <input
            type="text"
            placeholder="Find Friends"
            className="w-full text-white px-4 py-2 rounded-e-xl bg-[var(--btn-border)] focus:outline-none"
          />
        </div>

        <div className="chats">
          {chatPreviews.map((chat) => (
            <ChatPreview key={chat.id} {...chat} />
          ))}
        </div>
      </div>

      <div className="bg-blue-400 flex-4">
        <h1>Chat UI</h1>
      </div>
    </div>
  );
}

export default Chats;
