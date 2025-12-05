import { useEffect, useState } from "react";
import ChatDetail from "../../components/chat/ChatDetail";
import ChatList from "../../components/chat/ChatList";
import { getGroupsApi } from "../../lib/api/chat";
import { createToastMessage } from "../../lib/utils/ToastMessage";
import type { ChatPreviewModel } from "../../constant/model/chat";

function Chats() {
  const [groups, setGroups] = useState<ChatPreviewModel[]>([]);

  const handleGetGroups = async () => {
    try {
      const res = await getGroupsApi();
      if (res.status === 200) {
        setGroups(res.data);
      } else {
        createToastMessage("Something wrong", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetGroups();
  }, []);

  return (
    <div className="flex h-screen">
      <div className="bg-[var(--chat-bg)] flex-1 p-2 flex flex-col border-r border-[var(--btn-border)]">
        <ChatList groupPreviews={groups}/>
      </div>

      <div className="bg-black flex-4">
        <div className="bg-[var(--chat-bg)] h-full">
          <ChatDetail />
        </div>
      </div>
    </div>
  );
}

export default Chats;
