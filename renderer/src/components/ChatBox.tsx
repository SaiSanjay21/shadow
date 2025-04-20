import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
};

export const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        role: 'user',
        content: inputValue,
        ...(image ? { image } : {})
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // TODO: Add API call to backend
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${message.role === 'user' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-800'}`}>
              {message.content}
              {message.image && <img src={message.image} className="mt-2 max-w-xs rounded" alt="User uploaded" />}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex gap-2">
        <Input 
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="p-2 cursor-pointer">
          📷
        </label>
        <Input 
          value={inputValue}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e: { key: string; }) => e.key === 'Enter' && handleSendMessage()}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};