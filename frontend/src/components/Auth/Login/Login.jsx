import React, { useState } from 'react';
import styles from './Login.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';

export const LoginComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error, success } = useAuth();
    const { updateAuthStatus } = useAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            await login(userData);
            updateAuthStatus(true);
            console.log('Login successful');
        } catch (err) {
            console.error('Login error:', err.message);
        }
    };

    // return (
    //     <div className={styles.mainContainer}>
    //         <span className={styles.login}>Вхід</span>

    //         <div className={styles.userInput}>
    //             <div className={styles.input}>
    //                 <input type="text" className={styles.email} placeholder="Електронна пошта" />
    //             </div>

    //             <div className={styles.input}>
    //                 <input type="password" className={styles.password} placeholder="Пароль" />
    //             </div>

    //             <div className={styles.input}>
    //                 <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити пароль" />
    //             </div>
    //         </div>

    //         <button className={styles.further}>Далі</button>
    //         <div className={styles.linksContainer}>
    //             <a href="/register" className={styles.link}>
    //                 Реєстрація
    //             </a>
    //             <a href="/forgotPassword" className={styles.link}>
    //                 Забули пароль?
    //             </a>
    //         </div>
    //     </div>
    // );

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
                {success && <p style={{ color: 'green' }}>Login successful!</p>}
            </form>
        </div>
    );
};

export default LoginComp;
