// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
        setUserRole(response.data.userRole);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
