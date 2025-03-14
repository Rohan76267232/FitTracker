import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  onToggle?: (isDark: boolean) => void;
}

const ThemeToggle = ({ onToggle = () => {} }: ThemeToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    onToggle(!isDarkMode);
  };

  return (
    <motion.button
      className="relative h-8 w-16 rounded-full bg-slate-200 dark:bg-slate-700 p-1 transition-colors duration-300"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{ x: isDarkMode ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDarkMode ? (
          <Moon className="h-4 w-4 text-slate-700" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
