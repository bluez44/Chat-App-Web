import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoodIcon from "@mui/icons-material/Mood";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import type { MessageModel } from "../../constant/model/chat";

type ChatInputProps = {
  latestMessageId: number;
  setCurrentMessages: (message: MessageModel) => void;
};

function ChatInput({ latestMessageId, setCurrentMessages }: ChatInputProps) {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    const messageToSend: MessageModel = {
      id: latestMessageId + 1,
      sender: "Quang Vinh",
      content: newMessage.trim(),
      time: new Date(),
    };

    setCurrentMessages(messageToSend);

    setNewMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="p-2 flex gap-2 items-center">
      <div className="text-[var(--input-color)] hover:cursor-pointer hover:text-[var(--accent-primary-pressed)] duration-300">
        <AddCircleOutlineIcon fontSize="large" />
      </div>
      <div className="w-full flex items-center relative focus-within:text-[var(--accent-primary-pressed)] text-[var(--input-color)]">
        <div className="text-inherit absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer hover:text-[var(--accent-primary-pressed)] duration-300">
          <MoodIcon fontSize="large" />
        </div>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tin nhắn và nhấn Enter để gửi..."
          className="p-3 px-4 bg-[var(--chat-bg)] text-[var(--input-color)] w-full rounded-3xl border border-[var(--btn-border)] focus:outline-none focus:border-[var(--accent-primary-pressed)] focus:text-black resize-none duration-300"
          rows={1}
        />
      </div>
      <button
        className="bg-[var(--btn-border)] p-2 rounded-full hover:cursor-pointer disabled:cursor-not-allowed disabled:text-[var(--input-color)] hover:text-[var(--accent-primary-pressed)] duration-300"
        onClick={handleSendMessage}
        disabled={newMessage.trim() === ""}
      >
        <SendIcon fontSize="large" />
      </button>
    </div>
  );
}

export default ChatInput;
