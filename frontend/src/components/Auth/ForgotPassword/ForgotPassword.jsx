import React from 'react';
import styles from './ForgotPassword.css';

export const ForgotPasswordComp = () => {
    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToLogin} href="/login">
                ⬅
            </a>
            <span className={styles.resetPass}>Забули пароль</span>

            <div className={styles.userInput}>
                <div className={styles.input}>
                    <input type="email" className={styles.email} placeholder="Електронна пошта" />
                </div>
            </div>

            <button className={styles.send}>Надіслати</button>
        </div>
    );
};

export default ForgotPasswordComp;
