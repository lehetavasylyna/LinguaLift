import React, { useState } from 'react';
import styles from './Login.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { login, loading, error, success } = useAuth();
    const { updateAuthStatus } = useAuthContext();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const userData = { email, password };
        try {
            await login(userData);
            updateAuthStatus(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/lessons');
        } catch (err) {
            setErrorMessage(err.message);
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
                        type="password"
                        className={styles.password}
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.input}>
                    <input
                        type="password"
                        className={styles.passwordConfirm}
                        placeholder="Підтвердити пароль"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
