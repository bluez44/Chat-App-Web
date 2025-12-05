interface ChatPreviewModel {
  id: number;
  avatar?: string;
  name: string;
  latestMessage: LatestMessageModel;
  isRead?: boolean;
  privateChat: boolean;
  createdAt: Date;
}

interface LatestMessageModel {
  id: number;
  content: string;
  sendAt: Date;
  sender: SenderModel;
}

interface SenderModel {
  id: number;
  userName: string;
  avatar?: string;
  fullName: string;
  address?: string;
  birthday?: Date;
  createdAt?: Date;
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
