import type { FC } from 'react';
import type { ChatContact } from '../types';

interface ContactItemProps {
  contact: ChatContact;
  onClick: () => void;
}

export const ContactItem: FC<ContactItemProps> = ({ contact, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors duration-200"
    >
      <div className="relative">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full mr-4 border-2 border-transparent hover:border-[#25D366] transition-colors duration-200"
        />
        {contact.isOnline && (
          <div className="absolute bottom-0 right-4 h-3 w-3 bg-[#25D366] rounded-full border-2 border-white" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
        <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-500 mb-1">{contact.time}</p>
        {contact.unreadCount && (
          <span className="bg-[#25D366] text-white px-2 py-1 rounded-full text-xs font-medium">
            {contact.unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};