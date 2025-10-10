import type { chatPreviewModel } from "../constant/model/chat";
import { TimeFromNowToProvidedDate } from "../lib/utils/timeConvert";

function ChatPreview(chat: chatPreviewModel) {
  return (
    <div className="flex w-full gap-3 text-white items-center p-2 hover:bg-[var(--btn-border)] hover:cursor-pointer duration-300 rounded">
      <div className="flex-1 rounded-full">
        <img src={chat.avatar} alt="user avatar" className="rounded-full" />
      </div>
      <div className="flex-10">
        <h1 className="text-xl">{chat.name}</h1>
        <p className="text-md text-slate-400">
          {chat.latestMessage} -{" "}
          {TimeFromNowToProvidedDate(chat.latestMessageTime)}
        </p>
      </div>
    </div>
  );
}

export default ChatPreview;
