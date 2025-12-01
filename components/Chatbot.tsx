import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './Icon';
import { BRAND } from '../constants';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
  type?: 'text' | 'input';
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: 'Namaste! Welcome to SAA FORCE - Jann Shakti. How can I help you earn money today?', 
      sender: 'bot',
      options: ['Find a Job', 'Sell Products', 'Contact Support', 'Messiah Program']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (option: string) => {
    // User Message
    const userMsg: Message = { id: Date.now().toString(), text: option, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Bot Response Logic
    setTimeout(() => {
      let botResponse: Message = { id: (Date.now() + 1).toString(), text: '', sender: 'bot' };

      switch (option) {
        case 'Find a Job':
          botResponse.text = 'Great! We have multiple opportunities. Are you looking for Full-time or Work From Home?';
          botResponse.options = ['Full Time', 'Work From Home', 'Part Time'];
          break;
        case 'Full Time':
        case 'Part Time':
          botResponse.text = 'Excellent choice. We are hiring Sales & Marketing Executives. Training is available. Would you like to apply now?';
          botResponse.options = ['Yes, Apply Now', 'Tell me about Commission'];
          break;
        case 'Work From Home':
          botResponse.text = 'You can be a Sales Agent! Sell Insurance or Real Estate from home. Zero Investment. Interested?';
          botResponse.options = ['Yes, I am interested', 'How much can I earn?'];
          break;
        case 'Sell Products':
          botResponse.text = 'We have 10+ products including ITR, Insurance, and Real Estate. What is your interest?';
          botResponse.options = ['Financial Services', 'Insurance', 'Real Estate'];
          break;
        case 'Messiah Program':
          botResponse.text = 'The Messiah Program offers instant cash for urgent property sales. Do you want to Sell or Buy?';
          botResponse.options = ['Sell Property Fast', 'Buy Cheap Property'];
          break;
        case 'Yes, Apply Now':
        case 'Yes, I am interested':
          botResponse.text = `Please provide your Name and Phone Number below so our HR team can call you.`;
          break;
        case 'How much can I earn?':
        case 'Tell me about Commission':
          botResponse.text = 'You can earn up to 35% on Insurance and 25% on Property Rentals! Plus profit & salary options. Want to join?';
          botResponse.options = ['Yes, Apply Now'];
          break;
        default:
          botResponse.text = `Thank you. Our team will contact you at ${BRAND.phone1} shortly. Or you can WhatsApp us directly.`;
          botResponse.options = ['Chat on WhatsApp', 'Start Over'];
          break;
      }
      
      if (option.includes("WhatsApp")) {
         window.open(`https://wa.me/91${BRAND.phone1}`, '_blank');
      }
      
      if (option === 'Start Over') {
         setMessages([{ 
            id: '1', 
            text: 'Namaste! Welcome to SAA FORCE - Jann Shakti. How can I help you earn money today?', 
            sender: 'bot',
            options: ['Find a Job', 'Sell Products', 'Contact Support', 'Messiah Program']
          }]);
          setIsTyping(false);
          return;
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
        const botResponse: Message = { 
            id: (Date.now() + 1).toString(), 
            text: 'Thank you for your details. A SAA FORCE representative will call you within 24 hours to onboard you.', 
            sender: 'bot',
            options: ['Start Over']
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 md:right-24 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-blue animate-bounce'}`}
      >
        <Icon name={isOpen ? "X" : "MessageCircle"} className="text-white" size={28} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 md:right-10 z-50 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-blue to-blue-600 p-4 flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold">AI</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-brand-blue"></div>
            </div>
            <div className="text-white">
                <h3 className="font-bold font-heading text-sm">SAA FORCE Assistant</h3>
                <p className="text-[10px] opacity-80">Online | Replies Instantly</p>
            </div>
        </div>

        {/* Messages Body */}
        <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.sender === 'user' ? 'bg-brand-orange text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'}`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Interaction Area */}
        <div className="p-4 bg-white border-t border-gray-100">
            {/* Options Buttons */}
            {messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].options && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {messages[messages.length - 1].options?.map((opt, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => handleOptionClick(opt)}
                            className="text-xs bg-blue-50 text-brand-blue border border-brand-blue/20 px-3 py-2 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Field */}
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-brand-orange"
                />
                <button 
                    onClick={handleSend}
                    className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
                >
                    <Icon name="ArrowRight" size={18} />
                </button>
            </div>
        </div>
      </div>
    </>
  );
};