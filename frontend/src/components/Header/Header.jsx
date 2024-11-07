import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import useAuth from '../../hooks/useAuth';

export const Header = () => {
    const { isReg, setFirstName, setEmail, setPassword, toggleForm, handleRegister, handleLogin } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));

    return (
        <header className={styles.container}>
            <div className={styles.menu}>
                <img className={styles.logo} src="../../../assets/img/logo.png" alt="Logo" />
                <div className={styles.overlapMenu}>
                    <Link to="/" className={styles.menuBtn}>
                        Головна
                    </Link>

                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className={styles.menuBtn}>
                                Уроки
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/lessons" className={styles.menuBtn}>
                                Уроки
                            </Link>
                        </>
                    )}

                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className={styles.menuBtn}>
                                Словник
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/vocabulary" className={styles.menuBtn}>
                                Словник
                            </Link>
                        </>
                    )}

                    {!isAuthenticated ? (
                        <></>
                    ) : (
                        <>
                            <Link to="/profile" className={styles.menuBtn}>
                                Профіль
                            </Link>
                        </>
                    )}
                </div>
                <div className={styles.authBtns}>
                    {!isAuthenticated ? (
                        <>
                            <div className={styles.authBtn}>
                                <Link to="/register" className={styles.signUp}>
                                    Зареєструватися
                                </Link>
                            </div>
                            <div className={styles.authBtn}>
                                <Link to="/login" className={styles.logIn}>
                                    Увійти
                                </Link>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
