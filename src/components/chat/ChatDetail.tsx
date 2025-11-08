import { useCallback, useState } from "react";

import { messages } from "../../constant/mock/messages";
import type { MessageModel } from "../../constant/model/chat";
import { useAppSelector } from "../../hooks/redux";
import ChatHeader from "../message/ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatDetail() {
  const selectedChatGroup = useAppSelector((state) => state.selectedChatGroup);

  const [currentMessages, setCurrentMessages] =
    useState<MessageModel[]>(messages);

  const [latestMessageId, setLatestMessageId] = useState<number>(
    messages[messages.length - 1].id
  );

  const handleSetCurrentMessages = useCallback((message: MessageModel) => {
    setCurrentMessages((prevMessages) => [...prevMessages, message]);
    setLatestMessageId((prevId) => prevId + 1);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {selectedChatGroup.id ? (
        <>
          <ChatHeader selectedChatGroup={selectedChatGroup} />

          <ChatMessages currentMessages={currentMessages} />

          <ChatInput
            latestMessageId={latestMessageId}
            setCurrentMessages={handleSetCurrentMessages}
          />
        </>
      ) : (
        <div className="h-full flex items-center justify-center flex-col">
          <p className="text-center text-[var(--text-low-emphasis)] mt-4">
            Select a chat to start messaging
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatDetail;
