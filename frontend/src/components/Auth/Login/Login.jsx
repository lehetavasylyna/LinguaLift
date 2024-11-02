import React, { useState } from 'react';
import styles from './Login.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading } = useAuth();
    const { updateAuthStatus } = useAuthContext();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Введіть дійсну електронну пошту');
            return;
        }

        const userData = { email, password };

        try {
            const user = await login(userData);
            updateAuthStatus(true);
            setEmail('');
            setPassword('');
            setAttempts(0);
            navigate('/lessons');
        } catch (err) {
            setAttempts((prev) => prev + 1);
            setErrorMessage(err.message || 'Щось пішло не так');
            setEmail('');

            if (attempts >= 2) {
                setErrorMessage('Немає акаунта? Зареєструйтеся.');
            }
        }
    };

    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToHome} href="/">
                ⬅
            </a>
            <span className={styles.login}>Вхід</span>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}

            <form onSubmit={handleLogin} className={styles.userInput}>
                <div className={styles.input}>
                    <input
                        name="email"
                        type="email"
                        className={styles.email}
                        placeholder="Електронна пошта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.input}>
                    <input
                        name="password"
                        type="password"
                        className={styles.password}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className={styles.loginBtn} type="submit" disabled={loading}>
                    {loading ? 'Вхід...' : 'Увійти'}
                </button>
            </form>

            <div className={styles.linksContainer}>
                <a href="/register" className={styles.link}>
                    Реєстрація
                </a>
                <a href="/forgotPassword" className={styles.link}>
                    Забули пароль?
                </a>
            </div>
        </div>
    );
};

export default LoginComp;
