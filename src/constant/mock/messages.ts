import type { MessageModel } from "../model/chat";

const messages: MessageModel[] = [
  {
    id: 1,
    sender: "Jane Cooper",
    content: "Hi, how are you?",
    time: new Date(),
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    sender: "Jane Cooper",
    content: "Hello!",
    time: new Date(),
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    sender: "Quang Vinh",
    content: "I'm fine, how about you?",
    time: new Date(),
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 4,
    sender: "Jane Cooper",
    content: "I'm also fine!",
    time: new Date(),
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export { messages };
