import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';

export const RegisterComp = ({ isRegistration }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { updateAuthStatus } = useAuthContext();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        const userData = { email, password, nickname };
        try {
            await register(userData);
            updateAuthStatus(true);
            setEmail('');
            setPassword('');
            setNickname('');
            setConfirmPassword('');
            navigate('/lessons');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToHome} href="/">
                ⬅
            </a>
            <span className={styles.register}>Реєстрація</span>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <form onSubmit={handleRegister} className={styles.userInput}>
                <div className={styles.input}>
                    <input
                        className={styles.email}
                        type="email"
                        placeholder="Електронна пошта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        type="text"
                        className={styles.nickname}
                        placeholder="Користувацьке ім’я"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.input}>
                    <input
                        className={styles.password}
                        placeholder="Пароль"
                        type="password"
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
                <button className={styles.registerBtn} type="submit" disabled={loading}>
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
