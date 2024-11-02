import React, { createContext, useContext, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const { register, login, forgotPassword, resetPassword, loading, error, success } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistered, setIsRegistered] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);

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
        setUser(null);
    };

    const loadUserProfile = async () => {
        try {
            const response = await fetch('/api/profile', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                console.error('Не вдалося завантажити профіль');
            }
        } catch (error) {
            console.error('Помилка при завантаженні профілю:', error);
        }
    };

    const updateProfile = async (updatedData) => {
        try {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUser(updatedUser);
                return true;
            } else {
                console.error('Не вдалося оновити профіль');
                return false;
            }
        } catch (error) {
            console.error('Помилка при оновленні профілю:', error);
            return false;
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            loadUserProfile();
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
                user,
                loadUserProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
