import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Send, Bot, User, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatbotDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ChatbotDialog = ({ open, setOpen }: ChatbotDialogProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm your FitTrack assistant. How can I help you with your fitness journey today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simulate bot response after a delay
    setTimeout(
      () => {
        const botResponse = getBotResponse(inputValue);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    ); // Random delay between 1-2 seconds
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("pricing") ||
      input.includes("cost") ||
      input.includes("plan")
    ) {
      return "We offer three plans: Free (basic features), Premium ($9.99/month with advanced analytics), and Pro ($19.99/month with personal coaching). You can start with a 14-day free trial of any paid plan!";
    } else if (input.includes("weight") || input.includes("track")) {
      return "Our weight tracking feature allows you to log your weight, see progress graphs, and celebrate milestones. You can set goals and get personalized recommendations based on your progress.";
    } else if (input.includes("workout") || input.includes("exercise")) {
      return "FitTrack offers customizable workout plans based on your goals, equipment, and time availability. You can track your progress, see demonstration videos, and get AI-powered recommendations.";
    } else if (
      input.includes("food") ||
      input.includes("meal") ||
      input.includes("diet") ||
      input.includes("calorie")
    ) {
      return "Our food tracking system includes a database of over 1 million foods. You can log meals, scan barcodes, create meal plans, and get nutritional insights to support your fitness goals.";
    } else if (
      input.includes("sync") ||
      input.includes("device") ||
      input.includes("connect")
    ) {
      return "FitTrack syncs with popular fitness devices and apps including Fitbit, Apple Watch, Garmin, and more. This allows for seamless tracking of your activities and workouts.";
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
      return "I'm not sure I understand. Could you ask about our weight tracking, workout plans, meal planning, device syncing, or pricing plans?";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md max-h-[80vh] flex flex-col">
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle className="flex items-center">
            <Bot className="mr-2 h-5 w-5 text-primary" />
            FitTrack Assistant
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-start max-w-[80%]">
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=fittrack" />
                      <AvatarFallback>FT</AvatarFallback>
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
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 ml-2">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start max-w-[80%]">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=fittrack" />
                    <AvatarFallback>FT</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-muted">
                    <div className="flex space-x-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-primary"
                        animate={{ y: ["-25%", "25%", "-25%"] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-primary"
                        animate={{ y: ["-25%", "25%", "-25%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-primary"
                        animate={{ y: ["-25%", "25%", "-25%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </AnimatePresence>
        </div>

        <DialogFooter className="flex-shrink-0 p-4 pt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full space-x-2"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isTyping}
              className="rounded-full"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotDialog;
