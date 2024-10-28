import React from 'react';

import styles from './Header.css';

export const Header = () => (
    <header className={styles.container}>
        <div className={styles.menu}>
            <img className={styles.logo} src="../../../assets/img/logo.png" alt="Logo" />
            <div className={styles.overlapMenu}>
                <div className={styles.menuBtn}>Головна</div>
                <div className={styles.menuBtn}>Уроки</div>
                <div className={styles.menuBtn}>Мій Словник</div>
                <div className={styles.menuBtn}>Статистика</div>
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
