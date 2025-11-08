import { Search } from "lucide-react";
import MenuIcon from "@mui/icons-material/Menu";
import { chatPreviews } from "../../constant/mock/chatPreview";
import ChatPreviewList from "./ChatPreviewList";
import { useState } from "react";
import ChatSearchList from "./ChatSearchList";

function ChatList() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-4">
        <MenuIcon
          className="text-[var(--main-text)] cursor-pointer"
          fontSize="large"
        />
        <div className="h-full flex flex-1 border border-[var(--btn-border)] text-[var(--input-color)] rounded-3xl duration-300 focus-within:border-[var(--accent-primary-pressed)] focus-within:text-[var(--accent-primary-pressed)]">
          <Search className="text-inherit bg-[var(--chat-bg)] p-2 h-full w-10 rounded-s-3xl border-r-0 duration-300" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-[var(--input-color)] px-4 py-2 rounded-e-3xl bg-[var(--chat-bg)] border-l-0 duration-300 focus:text-black focus:outline-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>

      <div className="chats flex-1">
        {inputValue.length ? (
          <ChatSearchList />
        ) : (
          <ChatPreviewList chatPreviews={chatPreviews} />
        )}
      </div>
    </>
  );
}

export default ChatList;
