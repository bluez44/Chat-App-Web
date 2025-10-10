import type { MessageModel } from "../../constant/model/chat";

function MessageContent({
  message,
  username,
}: {
  message: MessageModel;
  username: string;
}) {
  if (username === message.sender) {
    return (
      <div className="mb-6 flex justify-end">
        <div className="text-white text-end max-w-1/2">
          <p className="text-md px-4 py-2 rounded-2xl bg-purple-500">
            {message.content}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div className="mb-6 flex gap-3 items-start">
        <div className="rounded-full bg-slate-50 flex items-center justify-center">
          <img src="/vite.svg" alt="user avatar" className="rounded-full" />
        </div>
        <div className="text-white max-w-1/2">
          <p className="text-md px-4 py-2 rounded-2xl bg-[var(--btn-border)]">
            {message.content}
          </p>
        </div>
      </div>
    );
}

export default MessageContent;
