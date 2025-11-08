import type { ChatPreviewModel } from "../model/chat";

const chatPreviews: ChatPreviewModel[] = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Jane Cooper",
    latestMessage: "Hi, how are you?",
    latestMessageTime: new Date(),
    isRead: false,
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=7",
    name: "Robert Fox",
    latestMessage: "Hello there!",
    latestMessageTime: new Date(),
    isRead: true,
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=8",
    name: "Cameron Williamson",
    latestMessage: "Are we still on for today?",
    latestMessageTime: new Date(),
    isRead: false,
  },
];

export { chatPreviews };
