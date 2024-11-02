import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';

export const RegisterComp = ({ isRegistration }) => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [nickname, setNickname] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const { register, loading } = useAuth();
    // const [errorMessage, setErrorMessage] = useState('');
    // const navigate = useNavigate();
    // const { updateAuthStatus } = useAuthContext();

    const [registrationData, setRegistrationData] = useState(null);
    // const [showData, setShowData] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { updateAuthStatus, loadUserProfile } = useAuthContext();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        const userData = { email, userName, password, passwordConfirm: confirmPassword };
        try {
            setErrorMessage('');

            const data = await register(userData);
            console.log('Registration success:', data);

            setRegistrationData({ email, userName });
            // setShowData(false);
            updateAuthStatus(true);
            await loadUserProfile();

            setEmail('');
            setPassword('');
            setUserName('');
            setConfirmPassword('');
            navigate('/lessons');
        } catch (error) {
            console.error('Registration error:', error);
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
                        className={styles.userName}
                        placeholder="Користувацьке ім’я"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
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
