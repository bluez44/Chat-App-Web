import { MessageSquare } from "lucide-react";

import type { ChatPreviewModel } from "../../constant/model/chat";
import ChatPreview from "./ChatPreview";

type ChatPreviewListProps = {
  chatPreviews: ChatPreviewModel[];
};

function ChatPreviewList({ chatPreviews }: ChatPreviewListProps) {
  return (
    <>
      {chatPreviews.length > 0 ? (
        chatPreviews.map((chat) => <ChatPreview key={chat.id} {...chat} />)
      ) : (
        <div className="h-full flex items-center justify-center flex-col">
          <MessageSquare
            size={128}
            className="text-[var(--text-low-emphasis)]"
          />
          <p className="text-center text-[var(--text-low-emphasis)] mt-4">
            You currently have no channels
          </p>
        </div>
      )}
    </>
  );
}

export default ChatPreviewList;
