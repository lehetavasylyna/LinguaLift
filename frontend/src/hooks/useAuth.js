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
            const response = await fetch('http://localhost:3000/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Реєстрація не вдалася');
            }

            const data = await response.json();
            setSuccess(true);
            return data;
        } catch (err) {
            console.error('Помилка реєстрації:', err);
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
            const response = await fetch('http://localhost:3000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Вхід не вдався');
            }

            const data = await response.json();
            const token = data.token;
            localStorage.setItem('token', token);
            setSuccess(true);
            setSuccess;
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
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
                throw new Error('Помилка при відправці електронного листа для скидання пароля');
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
                throw new Error('Помилка при скиданні пароля');
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

    const getUserData = async () => {
        try {
            const response = await fetch('http://localhost:3000/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Не вдалося отримати дані користувача');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Помилка при отриманні даних користувача:', error);
            throw error;
        }
    };

    return { register, login, forgotPassword, resetPassword, loading, error, success, getUserData };
};

export default useAuth;
