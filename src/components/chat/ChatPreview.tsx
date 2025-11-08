import { useDispatch } from "react-redux";
import type { ChatPreviewModel } from "../../constant/model/chat";
import { TimeFromNowToProvidedDate } from "../../lib/utils/TimeConvert";
import { setSelectedGroupChat } from "../../context/features/selectedChatGroup/selectedChatGroupSlice";
import { useAppSelector } from "../../hooks/redux";
import CircleIcon from "@mui/icons-material/Circle";
function ChatPreview(chat: ChatPreviewModel) {
  const dispatch = useDispatch();
  const selectedChatGroup = useAppSelector((state) => state.selectedChatGroup);

  const handleClick = () => {
    dispatch(
      setSelectedGroupChat({
        id: chat.id,
        avatar: chat.avatar,
        name: chat.name,
      })
    );
  };

  return (
    <div
      className={`flex w-full gap-3 text-[var(--text-high-emphasis)] items-center p-2 ${
        selectedChatGroup.name === chat.name
          ? "bg-[var(--btn-border)]"
          : !chat.isRead
          ? "bg-[var(--input-bg)]"
          : ""
      } hover:bg-[var(--btn-border)] hover:cursor-pointer duration-300 rounded`}
      onClick={handleClick}
    >
      <div className="flex-1 rounded-full h-full">
        <img
          src={chat.avatar}
          alt="user avatar"
          className="rounded-full h-full"
        />
      </div>
      <div className="flex-6 relative">
        {!chat.isRead && (
          <CircleIcon
            className="text-red-400 absolute -top-1 right-1"
            fontSize="small"
          />
        )}
        <h1 className="text-xl font-semibold">{chat.name}</h1>
        <div className="text-md text-[var(--text-low-emphasis)] flex justify-between">
          <p>{chat.latestMessage}</p>
          <p>{TimeFromNowToProvidedDate(chat.latestMessageTime)}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
