import { useState } from 'react';

const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const register = async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            setSuccess(true);
            return await response.json();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            setSuccess(true);
            return await response.json();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const forgotPassword = async (email) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Error sending password reset email');
            }

            setSuccess(true);
            return await response.json();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async (token, newPassword) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch(`/api/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });

            if (!response.ok) {
                throw new Error('Error resetting password');
            }

            setSuccess(true);
            return await response.json();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { register, login, forgotPassword, resetPassword, loading, error, success };
};

export default useAuth;
