interface chatPreviewModel {
    id: number;
    avatar: string;
    name: string;
    latestMessage: string;
    latestMessageTime: Date;
}

export type { chatPreviewModel };