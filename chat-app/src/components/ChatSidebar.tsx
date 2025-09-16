import type { FC } from 'react';
import { ChatContact } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ContactItem } from './ContactItem';

interface ChatSidebarProps {
  contacts: ChatContact[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onContactSelect: (contact: ChatContact) => void;
}

export const ChatSidebar: FC<ChatSidebarProps> = ({
  contacts,
  searchQuery,
  onSearchChange,
  onContactSelect
}) => {
  return (
    <div className="w-full md:w-[380px] bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Cabeçalho do Sidebar */}
      <div className="p-4 border-b border-gray-200 bg-[#f8f9fa]">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar conversas..."
            className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all duration-200"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Lista de Contatos */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onClick={() => onContactSelect(contact)}
          />
        ))}
      </div>
    </div>
  );
};