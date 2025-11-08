import type { selectedChatGroupModel } from "../../constant/model/chat";

type ChatHeaderProps = {
  selectedChatGroup: selectedChatGroupModel;
};

function ChatHeader({ selectedChatGroup }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-3 items-center">
        <div className="rounded-full w-14 h-14 flex items-center justify-center">
          <img
            src={`${selectedChatGroup.avatar}`}
            alt="user avatar"
            className="rounded-full"
          />
        </div>
        <div className="text-[var(--text-high-emphasis)]">
          <h1 className="text-xl">{selectedChatGroup.name}</h1>
          <p className="text-md text-[var(--text-low-emphasis)]">
            Active - 1 hour ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
