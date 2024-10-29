import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => (
    <header className={styles.container}>
        <div className={styles.menu}>
            <img className={styles.logo} src="../../../assets/img/logo.png" alt="Logo" />
            <div className={styles.overlapMenu}>
                <a href="/" className={styles.menuBtn}>
                    Головна
                </a>
                <a href="/lessons" className={styles.menuBtn}>
                    Уроки
                </a>
                <a href="/vocabulary" className={styles.menuBtn}>
                    Словник
                </a>
                <a href="/profile" className={styles.menuBtn}>
                    Профіль
                </a>
            </div>
            <div className={styles.authBtns}>
                <div className={styles.authBtn}>
                    <Link to={'/register'} className={styles.signUp}>
                        Зареєструватися
                    </Link>
                </div>

                <div className={styles.authBtn}>
                    <Link to={'/login'} className={styles.logIn}>
                        Увійти
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
