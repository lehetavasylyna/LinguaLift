<<<<<<< HEAD
import React from 'react';
import styles from './Login.css';

export const LoginComp = () => {
    return (
        <div className={styles.mainContainer}>
            <span className={styles.login}>Вхід</span>

            <div className={styles.userInput}>
                <div className={styles.input}>
                    <input type="text" className={styles.email} placeholder="Електронна пошта" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.password} placeholder="Пароль" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити пароль" />
                </div>
            </div>

            <button className={styles.further}>Далі</button>
=======
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

>>>>>>> backend_dev
            <div className={styles.linksContainer}>
                <a href="/register" className={styles.link}>
                    Реєстрація
                </a>
<<<<<<< HEAD
                <a href="/forgotPassword" className={styles.link}>
                    Забули пароль?
                </a>
=======
>>>>>>> backend_dev
            </div>
        </div>
    );
};

export default LoginComp;
