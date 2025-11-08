import type { MessageModel } from "../../constant/model/chat";
import MessageContent from "../message/MessageContent";

type ChatMessagesProps = {
  currentMessages: MessageModel[];
};

function ChatMessages({ currentMessages }: ChatMessagesProps) {
  const usename = "Quang Vinh";

  return (
    <div className="messages p-4 flex-1 overflow-auto">
      {currentMessages.map((message, index) => {
        const nextMessage = currentMessages[index + 1];

        const isLastMessageFromAUser =
          !nextMessage || nextMessage.sender !== message.sender;

        return (
          <MessageContent
            message={message}
            username={usename}
            isLastMessageFromAUser={isLastMessageFromAUser}
            key={message.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
