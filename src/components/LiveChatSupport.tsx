import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageSquare, Send, X, Phone, Video } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

interface LiveChatSupportProps {
  agentName?: string;
  agentAvatar?: string;
  agentTitle?: string;
  initialMessage?: string;
}

const LiveChatSupport = ({
  agentName = "Sarah Johnson",
  agentAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  agentTitle = "Fitness Coach",
  initialMessage = "Hi there! 👋 How can I help you with your fitness journey today?",
}: LiveChatSupportProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: initialMessage,
      sender: "agent",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate agent response after a delay
    setTimeout(() => {
      const agentResponse = getAgentResponse(inputValue);
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: agentResponse,
        sender: "agent",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAgentResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("pricing") ||
      input.includes("cost") ||
      input.includes("plan")
    ) {
      return "We offer three plans: Free (basic features), Premium ($9.99/month with advanced analytics), and Pro ($19.99/month with personal coaching). You can start with a 14-day free trial of any paid plan!";
    } else if (input.includes("workout") || input.includes("exercise")) {
      return "Our app offers customizable workout plans based on your goals, equipment, and time availability. You can track your progress, see demonstration videos, and get AI-powered recommendations.";
    } else if (
      input.includes("food") ||
      input.includes("meal") ||
      input.includes("diet")
    ) {
      return "Our food tracking system includes a database of over 1 million foods. You can log meals, scan barcodes, create meal plans, and get nutritional insights to support your fitness goals.";
    } else if (input.includes("cancel") || input.includes("refund")) {
      return "You can cancel your subscription anytime from your account settings. We offer a 30-day money-back guarantee if you're not satisfied with our premium services.";
    } else if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey")
    ) {
      return "Hello! How can I help you with your fitness tracking needs today?";
    } else if (input.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "Thanks for your message! I'd be happy to help with your fitness journey. Could you tell me more about what you're looking for? Whether it's workout plans, nutrition advice, or app features, I'm here to assist.";
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:right-8 z-50 w-full max-w-sm bg-background border rounded-lg shadow-lg overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border-2 border-white">
                  <AvatarImage src={agentAvatar} alt={agentName} />
                  <AvatarFallback>{agentName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{agentName}</h3>
                  <p className="text-xs opacity-90">{agentTitle}</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground opacity-80 hover:opacity-100"
                  onClick={minimizeChat}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-primary-foreground opacity-80 hover:opacity-100"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat actions */}
            <div className="bg-muted/30 p-2 flex space-x-2">
              <Button variant="ghost" size="sm" className="text-xs">
                <Phone className="h-3 w-3 mr-1" /> Call
              </Button>
              <Button variant="ghost" size="sm" className="text-xs">
                <Video className="h-3 w-3 mr-1" /> Video
              </Button>
              <div className="flex-1"></div>
              <Button variant="ghost" size="sm" className="text-xs">
                Email Transcript
              </Button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex items-start max-w-[80%]">
                    {message.sender === "agent" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={agentAvatar} alt={agentName} />
                        <AvatarFallback>{agentName.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`rounded-lg p-3 ${message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start max-w-[80%]">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={agentAvatar} alt={agentName} />
                      <AvatarFallback>{agentName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-muted">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                        <div
                          className="h-2 w-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="h-2 w-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex space-x-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim()}
                  className="rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 md:right-8 z-50 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg cursor-pointer"
            onClick={() => setIsMinimized(false)}
          >
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 border-2 border-white/20">
                <AvatarImage src={agentAvatar} alt={agentName} />
                <AvatarFallback>{agentName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{agentName}</p>
                <p className="text-xs opacity-90">Click to expand</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat button */}
      <motion.button
        className="fixed bottom-4 right-4 md:right-8 z-50 bg-primary text-primary-foreground h-12 w-12 rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default LiveChatSupport;
