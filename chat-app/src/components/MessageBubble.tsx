import type { FC } from 'react';
import type { Message } from '../types';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div
      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-3 shadow-sm ${
          message.sender === 'me'
            ? 'bg-[#dcf8c6] ml-auto'
            : 'bg-white'
        }`}
      >
        <p className="text-gray-800">{message.text}</p>
        <div className="flex items-center justify-end mt-1 space-x-1">
          <p className="text-xs text-gray-500">{message.time}</p>
          {message.sender === 'me' && (
            <CheckCircleIcon className="h-4 w-4 text-[#25D366]" />
          )}
        </div>
      </div>
    </div>
  );
};