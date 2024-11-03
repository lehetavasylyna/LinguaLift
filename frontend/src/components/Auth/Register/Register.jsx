import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';

export const RegisterComp = ({ isRegistration }) => {
    const { isReg, setFirstName, setEmail, setPassword, toggleForm, handleRegister, handleLogin } = useAuth();
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToHome} href="/">
                ⬅
            </a>
            <span className={styles.register}>Реєстрація</span>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <form className={styles.userInput}>
                <div className={styles.input}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Електронна пошта"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Користувацьке ім’я"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        name="passwordconfirm"
                        type="password"
                        placeholder="Підтвердити пароль"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className={styles.registerBtn}
                    type="button"
                    onClick={() => {
                        handleRegister();
                    }}
                    disabled={loading}
                >
                    {loading ? 'Реєстрація...' : 'Реєстрація'}
                </button>
            </form>
            <a href="/login" className={styles.login}>
                Увійти
            </a>
        </div>
    );
};

export default RegisterComp;
