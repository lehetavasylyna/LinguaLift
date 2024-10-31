import React, { useState } from 'react';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';

export const RegisterComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [token, setToken] = useState('');
    const { register, loading, error, success } = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
            const result = await register(userData);
            console.log('Registration successful:', result);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };

    // return (
    //     <div className={styles.mainContainer}>
    //         <span className={styles.register}>Реєстрація</span>

    //         <div className={styles.userInput}>
    //             <div className={styles.input}>
    //                 <input type="text" className={styles.email} placeholder="Електронна пошта" />
    //             </div>

    //             <div className={styles.input}>
    //                 <input type="text" className={styles.nickname} placeholder="Користувацьке ім’я" />
    //             </div>

    //             <div className={styles.input}>
    //                 <input type="password" className={styles.password} placeholder="Пароль" />
    //             </div>

    //             <div className={styles.input}>
    //                 <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити пароль" />
    //             </div>
    //         </div>

    //         <button className={styles.further}>Далі</button>

    //         <a href="/login" className={styles.login}>
    //             Увійти
    //         </a>
    //     </div>
    // );
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                    {loading ? 'Registering...' : 'Register'}
                </button>
                {error && <p style={{ color: 'red' }}>{error.message}</p>}
                {success && <p style={{ color: 'green' }}>Registration successful!</p>}
            </form>
        </div>
    );
};

export default RegisterComp;
