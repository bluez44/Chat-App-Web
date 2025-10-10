import { useState } from "react";
import { messages } from "../../constant/mock/messages";
import MessageContent from "./MessageContent";
import MessageHeader from "./MessageHeader";
import type { MessageModel } from "../../constant/model/chat";

function MessagePanel() {
  const [currentMessages, setCurrentMessages] =
    useState<MessageModel[]>(messages);

  const [newContent, setNewContent] = useState<string>("");

  const handleSendMessage = () => {
    if (newContent.trim() === "") {
      return;
    }

    const messageToSend: MessageModel = {
      id: currentMessages.length + 1,
      sender: "Quang Vinh",
      content: newContent.trim(),
      time: new Date(),
    };

    setCurrentMessages([...currentMessages, messageToSend]);

    setNewContent("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <MessageHeader />

      <div className="messages p-4 flex-1 overflow-auto">
        {currentMessages.map((message) => (
          <MessageContent
            message={message}
            username="Quang Vinh"
            key={message.id}
          />
        ))}
      </div>

      <div className="p-2">
        <textarea
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tin nhắn và nhấn Enter để gửi..."
          className="w-full p-4 bg-[var(--btn-border)] text-white rounded-xl focus:outline-none resize-none"
          rows={1}
        />
      </div>
    </div>
  );
}

export default MessagePanel;
