import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, X } from "lucide-react";

interface FloatingCTAProps {
  text?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  dismissible?: boolean;
}

const FloatingCTA = ({
  text = "Ready to start your fitness journey?",
  buttonText = "Get Started",
  onButtonClick = () => {},
  dismissible = true,
}: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show the CTA after user has scrolled a bit
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
            <p className="text-sm font-medium mr-2">{text}</p>
            <div className="flex items-center space-x-2">
              <Button
                onClick={onButtonClick}
                size="sm"
                className="rounded-full group"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
