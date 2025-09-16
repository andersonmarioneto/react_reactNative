export interface ChatContact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  avatar: string;
  isOnline?: boolean;
}

export interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
}