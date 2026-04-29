import { useState } from 'react';
import { Conversation } from '../Conversation/Conversation.jsx';
import { ChatInput } from '../ChatInput/ChatInput.jsx';

const initialMessages = [
  {
    id: 2,
    sender: 'bot',
    text: "Hi, I'm Shubham. Ask me anything you would like to know about my LinkedIn profile.",
    timestamp: '',
  },
];

const createMessage = (sender, text) => ({
  id: crypto.randomUUID(),
  sender,
  text,
  timestamp: new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date()),
});

export function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (messageText) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      createMessage('user', trimmedMessage),
    ]);
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage('bot', "Hi, I'am the chatbot, your LinkedIn profile assistant."),
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section className="chat-window" aria-label="LinkedIn profile bot chat">
      <header className="chat-header">LINKEDIN-IN PROFILE BOT</header>
      <div className="conversation-panel">
        <Conversation messages={messages} />
        <div className="typing-area" aria-live="polite">
          {isTyping && (
            <div className="typing-indicator" aria-label="Bot is typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>
      <ChatInput onSend={handleSend} />
    </section>
  );
}
