import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  FaceSmileIcon,
  PaperClipIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { ChatHeader } from './ChatHeader';
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { ChatHeader } from './ChatHeader';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

interface ChatContact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  avatar: string;
}

export function ChatMain() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Dados mockados para exemplo visual
  const contacts: ChatContact[] = [
    {
      id: 1,
      name: "Alice Silva",
      lastMessage: "Olá! Como você está?",
      time: "10:30",
      unreadCount: 2,
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Bob Santos",
      lastMessage: "Vamos marcar aquela reunião?",
      time: "09:45",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    // Adicione mais contatos conforme necessário
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
    // Adicione mais mensagens conforme necessário
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Lista de Contatos */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-1/4 bg-white border-r border-gray-200 flex flex-col`}>
        {/* Cabeçalho do Sidebar */}
        <div className="p-4 border-b border-gray-200 bg-[#f8f9fa]">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar conversas..."
              className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />

        {/* Lista de Contatos */}
        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
          {contacts.map(contact => (
            <div
              key={contact.id}
              className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{contact.time}</p>
                {contact.unreadCount && (
                  <span className="bg-[#25D366] text-white px-2 py-1 rounded-full text-xs">
                    {contact.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área Principal do Chat */}
      <div className={`flex-1 flex flex-col ${!isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        {/* Cabeçalho do Chat */}
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Current chat"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h2 className="font-semibold">Alice Silva</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-[#128C7E]">📞</button>
            <button className="text-gray-600 hover:text-[#128C7E]">📹</button>
            <button className="text-gray-600 hover:text-[#128C7E]">⋮</button>
          </div>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 overflow-y-auto bg-[#E5DDD5] p-4">
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'me'
                      ? 'bg-[#DCF8C6] ml-auto'
                      : 'bg-white'
                  }`}
                >
                  <p className="text-gray-800">{message.text}</p>
                  <p className="text-xs text-gray-500 text-right mt-1">
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área de Input */}
        <div className="bg-white p-4 flex items-center space-x-4">
          <button className="text-gray-600 hover:text-[#128C7E]">😊</button>
          <button className="text-gray-600 hover:text-[#128C7E]">📎</button>
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="text-gray-600 hover:text-[#128C7E]">🎤</button>
          <button className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E]">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}