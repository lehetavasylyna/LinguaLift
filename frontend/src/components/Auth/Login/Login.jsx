import React, { useState } from 'react';
import styles from './Login.module.css';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const LoginComp = () => {
    const { isReg, setFirstName, setEmail, setPassword, toggleForm, handleRegister, handleLogin } = useAuth();
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [attempts, setAttempts] = useState(0);

    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToHome} href="/">
                ⬅
            </a>
            <span className={styles.login}>Вхід</span>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}

            <form className={styles.userInput}>
                <div className={styles.input}>
                    <input
                        name="email"
                        type="email"
                        className={styles.email}
                        placeholder="Електронна пошта"
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
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    className={styles.loginBtn}
                    type="button"
                    onClick={() => {
                        handleLogin();
                    }}
                    disabled={loading}
                >
                    {loading ? 'Вхід...' : 'Увійти'}
                </button>
            </form>

            <div className={styles.linksContainer}>
                <a href="/register" className={styles.link}>
                    Реєстрація
                </a>
            </div>
        </div>
    );
};

export default LoginComp;
