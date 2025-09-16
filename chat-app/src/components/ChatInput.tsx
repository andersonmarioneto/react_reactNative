import type { FC } from 'react';
import {
  FaceSmileIcon,
  PaperClipIcon,
  MicrophoneIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

interface ChatInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
}

export const ChatInput: FC<ChatInputProps> = ({
  message,
  onMessageChange,
  onSendMessage
}) => {
  return (
    <div className="bg-white px-6 py-4 flex items-center space-x-4">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <FaceSmileIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <PaperClipIcon className="h-6 w-6 text-gray-600" />
      </button>
      <input
        type="text"
        placeholder="Digite uma mensagem..."
        className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all duration-200"
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      {!message ? (
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MicrophoneIcon className="h-6 w-6 text-gray-600" />
        </button>
      ) : (
        <button
          onClick={onSendMessage}
          className="p-3 bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-colors"
        >
          <PaperAirplaneIcon className="h-5 w-5 text-white" />
        </button>
      )}
    </div>
  );
};