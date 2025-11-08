import type { MessageModel } from "../../constant/model/chat";

type MessageContentProps = {
  message: MessageModel;
  username: string;
  isLastMessageFromAUser: boolean;
};

function MessageContent({
  message,
  username,
  isLastMessageFromAUser,
}: MessageContentProps) {
  if (username === message.sender) {
    return (
      <div
        className={`${
          isLastMessageFromAUser ? "mb-6" : "mb-1"
        } flex justify-end`}
      >
        <div className="text-white text-end max-w-1/2">
          <p className="text-md px-4 py-2 rounded-2xl rounded-br-none bg-purple-500">
            {message.content}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div
        className={`${
          isLastMessageFromAUser ? "mb-6" : "mb-1"
        } flex gap-3 items-start`}
      >
        <div
          className={`rounded-full bg-slate-50 flex items-center justify-center w-10 h-10 ${
            isLastMessageFromAUser ? "block" : "invisible"
          }`}
        >
          <img
            src={message.avatar ? message.avatar : "/vite.svg"}
            alt="user avatar"
            className="rounded-full"
          />
        </div>
        <div className="text-white max-w-1/2">
          <p className="text-md px-4 py-2 rounded-2xl rounded-bl-none bg-[var(--btn-border)]">
            {message.content}
          </p>
        </div>
      </div>
    );
}

export default MessageContent;
