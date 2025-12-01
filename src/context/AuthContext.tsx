import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock User Data
const MOCK_USER: User = {
  id: '1',
  name: 'Alex Administrator',
  email: 'admin@masterpanel.com',
  role: 'SUPER_ADMIN',
  status: 'active',
  lastLogin: new Date().toISOString(),
  avatar: 'https://ui-avatars.com/api/?name=Alex+Admin&background=0ea5e9&color=fff'
};

export function AuthProvider({ children }: { children?: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password) {
      setUser(MOCK_USER);
      localStorage.setItem('token', 'mock-jwt-token');
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      logout,
      isLoading 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};