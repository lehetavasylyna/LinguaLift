import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const { register, login, forgotPassword, resetPassword, loading, error, success } = useAuth();
    const [isRegistered, setIsRegistered] = useState(!!localStorage.getItem('token'));

    const updateAuthStatus = (status) => {
        setIsRegistered(status);
        if (status) {
            localStorage.setItem('token', 'your_token_here');
        } else {
            localStorage.removeItem('token');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsRegistered(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsRegistered(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isRegistered,
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
