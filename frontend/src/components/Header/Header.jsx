import React from 'react';

import styles from './Header.css';

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
                    Мій Словник
                </a>
                <a href="/profile" className={styles.menuBtn}>
                    Профіль
                </a>
            </div>
            <div className={styles.authBtns}>
                <div className={styles.authBtn}>
                    <div className={styles.signUp}>Зареєструватися</div>
                </div>

                <div className={styles.authBtn}>
                    <div className={styles.logIn}>Увійти</div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
