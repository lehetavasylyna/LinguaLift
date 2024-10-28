import React from 'react';
import styles from './ResetPassword.css';

export const ResetPasswordComp = () => {
    return (
        <div className={styles.mainContainer}>
            <span className={styles.reset}>Зміна паролю</span>

            <div className={styles.userInput}>
                <div className={styles.input}>
                    <input type="password" className={styles.password} placeholder="Новий пароль" />
                </div>

                <div className={styles.input}>
                    <input type="password" className={styles.passwordConfirm} placeholder="Підтвердити новий пароль" />
                </div>
            </div>

            <button className={styles.save}>Зберегти</button>
        </div>
    );
};

export default ResetPasswordComp;
