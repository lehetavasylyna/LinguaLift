import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const { register, login, forgotPassword, resetPassword, loading, error, success } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistered, setIsRegistered] = useState(!!localStorage.getItem('token'));

    const updateAuthStatus = (status) => {
        setIsRegistered(status);
        if (status) {
            localStorage.setItem('token', 'your_token_here');
            setIsAuthenticated(true);
        } else {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsRegistered(false);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isRegistered,
                isAuthenticated,
                register,
                login,
                forgotPassword,
                resetPassword,
                loading,
                error,
                success,
                updateAuthStatus,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
