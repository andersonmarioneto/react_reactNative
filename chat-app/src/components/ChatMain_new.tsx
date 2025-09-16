import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  PaperClipIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

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
  isOnline?: boolean;
}

export function ChatMain() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');

  // Dados mockados para exemplo visual
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

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Lista de Contatos */}
      <div className="w-1/4 bg-white border-r border-gray-200 flex flex-col">
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
          </div>
        </div>

        {/* Lista de Contatos */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map(contact => (
            <div
              key={contact.id}
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
          ))}
        </div>
      </div>

      {/* Área Principal do Chat */}
      <div className="flex-1 flex flex-col bg-[#f8f9fa]">
        {/* Cabeçalho do Chat */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="relative">
              <img
                src={contacts[0].avatar}
                alt="Current chat"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="absolute bottom-0 right-3 h-3 w-3 bg-[#25D366] rounded-full border-2 border-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{contacts[0].name}</h2>
              <p className="text-sm text-[#25D366]">Online</p>
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

        {/* Área de Mensagens */}
        <div className="flex-1 overflow-y-auto bg-[#efeae2] p-6">
          <div className="space-y-6 max-w-3xl mx-auto">
            {messages.map(message => (
              <div
                key={message.id}
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
            ))}
          </div>
        </div>

        {/* Área de Input */}
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
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          {!newMessage ? (
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MicrophoneIcon className="h-6 w-6 text-gray-600" />
            </button>
          ) : (
            <button className="p-3 bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-colors">
              <PaperAirplaneIcon className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}