import type { ChatPreviewModel } from "../../constant/model/chat";
import { useAppSelector } from "../../hooks/redux";
import CircleIcon from "@mui/icons-material/Circle";
function ChatPreview(chat: ChatPreviewModel) {
  const selectedChatGroup = useAppSelector((state) => state.selectedChatGroup);

  const handleClick = () => {
    // dispatch(
    //   setSelectedGroupChat({
    //     id: chat.id,
    //     avatar: chat.avatar,
    //     name: chat.name,
    //   })
    // );
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
          src={chat.avatar || "https://i.pravatar.cc/150?img=5"}
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
          <p>{chat.latestMessage?.content}</p>
          {/* <p>{TimeFromNowToProvidedDate(chat.latestMessage.sendAt)}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
