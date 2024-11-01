import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';

export const Header = () => {
    const { isRegistered, logout } = useAuthContext();

    return (
        <header className={styles.container}>
            <div className={styles.menu}>
                <img className={styles.logo} src="../../../assets/img/logo.png" alt="Logo" />
                <div className={styles.overlapMenu}>
                    <Link to="/" className={styles.menuBtn}>
                        Головна
                    </Link>

                    {!isRegistered ? (
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

                    {!isRegistered ? (
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

                    {!isRegistered ? (
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
                    {!isRegistered ? (
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
