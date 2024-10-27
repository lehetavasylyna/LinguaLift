import React from 'react';
import styles from './Register.css';

export const RegisterComp = () => {
    return (
        <div className={styles.mainContainer}>
            <span className={styles.register}>Реєстрація</span>

            <div className={styles.userInput}>
                <div className={styles.input}>
                    <input type="text" className={styles.email} placeholder="Електронна пошта" />
                </div>

                <div className={styles.input}>
                    <input type="text" className={styles.nickname} placeholder="Користувацьке ім’я" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.password} placeholder="Пароль" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити пароль" />
                </div>
            </div>

            <button className={styles.further}>Далі</button>

            <a href="/login" className={styles.login}>
                Увійти
            </a>
        </div>
    );
};

export default RegisterComp;
