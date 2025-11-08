interface ChatPreviewModel {
  id: number;
  avatar: string;
  name: string;
  latestMessage: string;
  latestMessageTime: Date;
  isRead?: boolean;
}

interface MessageModel {
  id: number;
  sender: string;
  content: string;
  time: Date;
  avatar?: string;
}

interface selectedChatGroupModel {
  id: number;
  avatar: string;
  name: string;
}

export type { ChatPreviewModel, MessageModel, selectedChatGroupModel };
