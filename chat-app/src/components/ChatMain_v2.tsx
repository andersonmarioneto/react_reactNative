import { useState } from 'react';
import type { FC } from 'react';
import type { ChatContact, Message } from '../types';
import { ChatSidebar } from './ChatSidebar';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

export const ChatMain: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [currentContact, setCurrentContact] = useState<ChatContact | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const contacts: ChatContact[] = [
    {
      id: 1,
      name: "Alice Silva",
      lastMessage: "Olá! Como você está?",
      time: "10:30",
      unreadCount: 2,
      avatar: "https://i.pravatar.cc/150?img=1",
      isOnline: true
    },
    {
      id: 2,
      name: "Bob Santos",
      lastMessage: "Vamos marcar aquela reunião?",
      time: "09:45",
      avatar: "https://i.pravatar.cc/150?img=2",
      isOnline: false
    },
  ];

  const messages: Message[] = [
    {
      id: 1,
      text: "Oi! Tudo bem?",
      sender: "other",
      time: "10:30"
    },
    {
      id: 2,
      text: "Tudo ótimo! E com você?",
      sender: "me",
      time: "10:31"
    },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Aqui você pode adicionar a lógica para enviar a mensagem
    console.log('Enviando mensagem:', newMessage);
    setNewMessage('');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar com responsividade */}
      <div className={`
        fixed md:relative
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-300 ease-in-out
        z-30 h-full
      `}>
        <ChatSidebar
          contacts={contacts}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onContactSelect={(contact) => {
            setCurrentContact(contact);
            setIsSidebarOpen(false);
          }}
        />
      </div>

      {/* Área Principal do Chat */}
      <div className="flex-1 flex flex-col bg-[#f8f9fa]">
        {currentContact ? (
          <>
            <ChatHeader currentContact={currentContact} />
            <MessageList messages={messages} />
            <ChatInput
              message={newMessage}
              onMessageChange={setNewMessage}
              onSendMessage={handleSendMessage}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-600">
                Selecione um contato para iniciar uma conversa
              </h2>
              <p className="text-gray-500 mt-2">
                Escolha um contato da lista para começar a conversar
              </p>
            </div>
          </div>
        )}

        {/* Botão para abrir/fechar sidebar em telas pequenas */}
        <button
          onClick={toggleSidebar}
          className="fixed md:hidden bottom-4 right-4 p-4 bg-[#25D366] rounded-full shadow-lg text-white z-40"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Overlay para fechar sidebar em telas pequenas */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};