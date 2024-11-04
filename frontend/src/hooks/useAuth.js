import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [isReg, setIsReg] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const toggleForm = () => setIsReg((value) => !value);

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                navigate('/login');
            } else {
                const errorData = await response.json();
                console.error('Registration error:', errorData.message);
                setErrorMessage(errorData.message || 'Registration failed.');
            }
        } catch (err) {
            console.error('Registration failed:', err);
            console.error('Registration failed:', err.message);
            alert('Registration failed. Try again later.');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/v1/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            console.log('RESPONSE IS');
            if (response.ok) {
                console.log('RESPONSE IS OK');
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', email);
                navigate('/lessons');
            } else {
                const error = await response.json();
                console.error(`Error: ${error.message}`);
                setErrorMessage(error.message || 'Login failed.');
            }
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    return {
        isReg,
        setFirstName,
        setEmail,
        setPassword,
        password,
        toggleForm,
        handleRegister,
        handleLogin,
        logout,
    };
};

export default useAuth;
