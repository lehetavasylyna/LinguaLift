// useAuth.js
import { useState } from 'react';

function useAuth() {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        const result = await response.json();
        if (result.token) {
            localStorage.setItem('token', result.token);
            setUser(result.user);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return { user, login, logout };
}

export default useAuth;
