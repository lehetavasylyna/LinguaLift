import React, { useState, useEffect } from 'react';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';

export const RegisterComp = ({ isRegistration }) => {
    const { setFirstName, setEmail, password, setPassword, handleRegister } = useAuth();
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        if (confirmPassword !== password) {
            setErrorMessage('Паролі не збігаються.');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        setErrorMessage('');
        await handleRegister();
    };

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
                        value={password}
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        name="passwordconfirm"
                        type="password"
                        value={confirmPassword}
                        placeholder="Підтвердити пароль"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className={styles.registerBtn}
                    type="button"
                    onClick={() => {
                        handleSubmit();
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
