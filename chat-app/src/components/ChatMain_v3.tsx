import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  FaceSmileIcon,
  PaperClipIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
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
  isOnline?: boolean;
}

export function ChatMain() {
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ChatContact | null>(null);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContactClick = (contact: ChatContact) => {
    setSelectedContact(contact);
    // Em mobile, fecha a sidebar ao selecionar um contato
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Container de Visualização - controla qual elemento está visível em mobile */}
      <div className="relative flex w-full h-full overflow-hidden">
        {/* Sidebar - Lista de Contatos */}
        <div 
          className={`
            absolute md:relative w-full md:w-[380px] bg-white
            flex flex-col h-full z-20
            transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          {/* Cabeçalho do Sidebar */}
          <div className="p-4 border-b border-gray-200 bg-[#f8f9fa]">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar conversas..."
                className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
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
                className={`
                  flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100
                  ${selectedContact?.id === contact.id ? 'bg-gray-100' : ''}
                `}
                onClick={() => handleContactClick(contact)}
              >
                <div className="relative">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full mr-4"
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
        <div 
          className={`
            absolute md:relative flex flex-col h-full w-full md:w-[calc(100%-380px)]
            bg-[#efeae2] transition-transform duration-300 ease-in-out z-10
            ${isSidebarOpen ? 'translate-x-full md:translate-x-0' : 'translate-x-0'}
          `}
        >
          {selectedContact ? (
            <>
              <ChatHeader 
                currentContact={selectedContact} 
                onMenuClick={toggleSidebar}
              />

              {/* Área de Mensagens */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4 max-w-3xl mx-auto">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`
                          max-w-[70%] p-3 rounded-lg
                          ${message.sender === 'me' ? 'bg-[#dcf8c6]' : 'bg-white'}
                        `}
                      >
                        <p className="text-gray-800">{message.text}</p>
                        <div className="flex items-center justify-end mt-1 space-x-1">
                          <span className="text-xs text-gray-500">{message.time}</span>
                          {message.sender === 'me' && (
                            <span className="text-[#25D366]">✓✓</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Área de Input */}
              <div className="p-4 bg-[#f0f2f5] border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <FaceSmileIcon className="h-6 w-6 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <PaperClipIcon className="h-6 w-6 text-gray-600" />
                  </button>
                  <input
                    type="text"
                    placeholder="Digite uma mensagem"
                    className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  {newMessage ? (
                    <button className="p-2 text-[#25D366] hover:bg-gray-100 rounded-full">
                      <PaperAirplaneIcon className="h-6 w-6" />
                    </button>
                  ) : (
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MicrophoneIcon className="h-6 w-6 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-[#f0f2f5]">
              <div className="text-center">
                <p className="text-gray-500 text-lg">Selecione um contato para iniciar uma conversa</p>
                <button 
                  className="mt-4 md:hidden px-4 py-2 bg-[#25D366] text-white rounded-lg"
                  onClick={toggleSidebar}
                >
                  Ver contatos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}