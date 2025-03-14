import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, X, Sun, Moon, ChevronDown, LogIn } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import UserProfileDropdown from "./auth/UserProfileDropdown";

interface NavbarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
  onThemeToggle?: (isDark: boolean) => void;
}

const Navbar = ({
  logo = "FitTrack",
  links = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "/blog" },
  ],
  onThemeToggle = () => {},
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleThemeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    onThemeToggle(checked);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            {logo}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme Toggle and CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle onToggle={handleThemeToggle} />

          {isAuthenticated ? (
            <UserProfileDropdown />
          ) : (
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="font-medium rounded-full px-6 transition-all duration-300 hover:shadow-sm"
                onClick={() => navigate("/login")}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-primary py-2 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center justify-between py-2">
              <ThemeToggle onToggle={handleThemeToggle} />

              {isAuthenticated ? (
                <UserProfileDropdown />
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-medium rounded-full transition-all duration-300"
                    onClick={() => {
                      navigate("/login");
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300"
                    onClick={() => {
                      navigate("/register");
                      setIsMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
