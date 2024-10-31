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
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            setSuccess(true);
            return data;
        } catch (err) {
            console.error('Registration error:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const login = async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const token = data.token;
            localStorage.setItem('token', token);
            setSuccess(true);
            return data;
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
            const response = await fetch('http://localhost:3000/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Error sending password reset email');
            }

            const data = await response.json();
            setSuccess(true);
            return data;
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
            const response = await fetch(`http://localhost:3000/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });

            if (!response.ok) {
                throw new Error('Error resetting password');
            }

            const data = await response.json();
            setSuccess(true);
            return data;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { register, login, forgotPassword, resetPassword, loading, error, success };
};

export default useAuth;
