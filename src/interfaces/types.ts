export interface ChatListScreenProps {
  id: string;
  chatName: string;
  enterChat: (id: string, chatName: string) => void;
}

export interface Chat {
  id: number;
  contact: string;
  lastMessage: string;
  lastMessageTime: string;
}

export interface ChatProps {
  chatRoom: Chat;
}

export interface CustomHeaderProps {
  contact?: string;
}

export interface ChatMessageProps {
  sender: string;
  content: string;
  time: string;
}

export interface SpecificChatProps {
  contact: string;
  messages: ChatMessageProps[];
}

export interface UserProfile {
  name: string;
  phone: string;
  photo: string;
  status: string;
  lastSeen: string;
}

export interface UserProps {
  item: UserProfile;
}

export interface EditNameProps {
  displayName: string;
  onSubmit: (newName: string) => void;
}