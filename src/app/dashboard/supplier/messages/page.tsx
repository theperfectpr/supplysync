"use client";
import React, { useState } from "react";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
}

interface Conversation {
  id: number;
  customer: string;
  lastMessage: string;
  unread: number;
  messages: Message[];
}

const MessagesPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      customer: "TechCorp",
      lastMessage: "Can you provide a quote for 1000 units?",
      unread: 2,
      messages: [
        { id: 1, sender: "TechCorp", content: "Hello, we're interested in your microprocessors.", timestamp: "2023-06-10 09:30" },
        { id: 2, sender: "Supplier", content: "Hi TechCorp, great to hear from you! What specifications are you looking for?", timestamp: "2023-06-10 09:45" },
        { id: 3, sender: "TechCorp", content: "We need 3.5 GHz quad-core processors. What's your current stock?", timestamp: "2023-06-10 10:00" },
        { id: 4, sender: "Supplier", content: "We have those in stock. How many units do you need?", timestamp: "2023-06-10 10:15" },
        { id: 5, sender: "TechCorp", content: "Can you provide a quote for 1000 units?", timestamp: "2023-06-10 10:30" },
      ]
    },
    {
      id: 2,
      customer: "AutoMakers",
      lastMessage: "Thanks for the quick response!",
      unread: 0,
      messages: [
        { id: 1, sender: "AutoMakers", content: "Hi, we're looking for high-capacity car batteries.", timestamp: "2023-06-09 14:00" },
        { id: 2, sender: "Supplier", content: "Hello AutoMakers! We have a range of car batteries. What specific capacity are you looking for?", timestamp: "2023-06-09 14:15" },
        { id: 3, sender: "AutoMakers", content: "We need 70Ah batteries. Do you have those available?", timestamp: "2023-06-09 14:30" },
        { id: 4, sender: "Supplier", content: "Yes, we do have 70Ah batteries in stock. How many do you need?", timestamp: "2023-06-09 14:45" },
        { id: 5, sender: "AutoMakers", content: "Great! We'll need about 500 units. Can you send us a quote?", timestamp: "2023-06-09 15:00" },
        { id: 6, sender: "Supplier", content: "Certainly! I'll prepare a quote and send it to you shortly.", timestamp: "2023-06-09 15:15" },
        { id: 7, sender: "AutoMakers", content: "Thanks for the quick response!", timestamp: "2023-06-09 15:30" },
      ]
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const updatedConversation = {
        ...selectedConversation,
        messages: [
          ...selectedConversation.messages,
          {
            id: selectedConversation.messages.length + 1,
            sender: "Supplier",
            content: newMessage.trim(),
            timestamp: new Date().toLocaleString(),
          },
        ],
        lastMessage: newMessage.trim(),
      };

      setConversations(conversations.map(conv =>
        conv.id === selectedConversation.id ? updatedConversation : conv
      ));

      setSelectedConversation(updatedConversation);
      setNewMessage("");
    }
  };

  return (
    <div className="p-8 flex h-screen">
      <div className="w-1/3 pr-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Conversations</h2>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-4 mb-2 rounded cursor-pointer ${selectedConversation?.id === conv.id ? 'bg-blue-100' : 'bg-gray-100'}`}
            onClick={() => setSelectedConversation(conv)}
          >
            <h3 className="font-semibold">{conv.customer}</h3>
            <p className="text-sm text-gray-600">{conv.lastMessage}</p>
            {conv.unread > 0 && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">{conv.unread}</span>
            )}
          </div>
        ))}
      </div>
      <div className="w-2/3 pl-4 flex flex-col">
        {selectedConversation ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Chat with {selectedConversation.customer}</h2>
            <div className="flex-grow overflow-y-auto mb-4 bg-gray-100 p-4 rounded" style={{height: '400px'}}>
              {selectedConversation.messages.map((message) => (
                <div key={message.id} className={`mb-2 ${message.sender === 'Supplier' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded ${message.sender === 'Supplier' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    {message.content}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow p-2 border rounded-l"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Select a conversation to start chatting</p>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;