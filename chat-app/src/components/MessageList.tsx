import type { FC } from 'react';
import type { Message } from '../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#efeae2] p-6">
      <div className="space-y-6 max-w-3xl mx-auto">
        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};