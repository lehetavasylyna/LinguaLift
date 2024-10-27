import React from 'react';
import styles from './Login.css';

export const LoginComp = () => {
    return (
        <div className={styles.mainContainer}>
            <span className={styles.login}>Вхід</span>

            <div className={styles.userInput}>
                <div className={styles.input}>
                    <input type="text" className={styles.email} placeholder="Електронна пошта" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.password} placeholder="Пароль" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити пароль" />
                </div>
            </div>

            <button className={styles.further}>Далі</button>
            <div className={styles.linksContainer}>
                <a href="/register" className={styles.link}>
                    Реєстрація
                </a>
                <a href="/forgot-password" className={styles.link}>
                    Забули пароль?
                </a>
            </div>
        </div>
    );
};

export default LoginComp;
