interface ChatPreviewModel {
  id: number;
  avatar: string;
  name: string;
  latestMessage: string;
  latestMessageTime: Date;
}

interface MessageModel {
  id: number;
  sender: string;
  content: string;
  time: Date;
}

export type { ChatPreviewModel, MessageModel };
