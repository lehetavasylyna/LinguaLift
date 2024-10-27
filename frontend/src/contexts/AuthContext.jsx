// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Створюємо контекст
const AuthContext = createContext();

// Провайдер для AuthContext
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Функції для керування авторизацією
    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

// Користувацький хук для використання AuthContext
export const useAuth = () => useContext(AuthContext);
