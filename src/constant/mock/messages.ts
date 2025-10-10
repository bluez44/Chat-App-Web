import type { MessageModel } from "../model/chat";

const messages: MessageModel[] = [
  {
    id: 1,
    sender: "Jane Cooper",
    content: "Hi, how are you?",
    time: new Date(),
  },
  {
    id: 2,
    sender: "Quang Vinh",
    content: "I'm fine, how about you?",
    time: new Date(),
  },
  {
    id: 3,
    sender: "Jane Cooper",
    content: "I'm also fine!",
    time: new Date(),
  },
];

export { messages };
