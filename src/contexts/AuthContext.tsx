import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("fittrack_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful login
      if (email && password) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock user data
        const userData: User = {
          id: "1",
          email,
          name: email.split("@")[0],
          profilePicture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        };

        setUser(userData);
        localStorage.setItem("fittrack_user", JSON.stringify(userData));
        navigate("/");
      } else {
        throw new Error("Please provide both email and password");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during login",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      if (name && email && password) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock user data
        const userData: User = {
          id: "1",
          email,
          name,
          profilePicture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        };

        setUser(userData);
        localStorage.setItem("fittrack_user", JSON.stringify(userData));
        navigate("/");
      } else {
        throw new Error("Please fill in all required fields");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during registration",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fittrack_user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
