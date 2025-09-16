import type { FC } from 'react';
import type { ChatContact } from '../types';
import {
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline';

interface ChatHeaderProps {
  currentContact: ChatContact;
}

export const ChatHeader: FC<ChatHeaderProps> = ({ currentContact }) => {
  return (
    <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200 shadow-sm">
      <div className="flex items-center">
        <div className="relative">
          <img
            src={currentContact.avatar}
            alt={currentContact.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          {currentContact.isOnline && (
            <div className="absolute bottom-0 right-3 h-3 w-3 bg-[#25D366] rounded-full border-2 border-white" />
          )}
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">{currentContact.name}</h2>
          <p className="text-sm text-[#25D366]">
            {currentContact.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <PhoneIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <VideoCameraIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};