import styles from './ResetPassword.css';
import React from 'react';

import { Header } from '../../components/Header';
import ResetPasswordComp from '../../components/Auth/ResetPassword';

function ResetPassword() {
    return (
        <div className={styles.home}>
            <div className={styles.backgroundBlur}></div>

            <div className={styles.contentContainer}>
                <div className={`${styles.letsStart} ${styles.blur}`}>
                    <div className={`${styles.letsStartBtn} ${styles.blur}`}>Почнемо!</div>
                </div>

                <p className={`${styles.greeting} ${styles.blur}`}>Hello! Are you ready to study?</p>
                <img className={`${styles.background} ${styles.blur}`} src="../../../assets/img/back.png" />
            </div>

            <div className={styles.registrationContainer}>
                <ResetPasswordComp />
            </div>
        </div>
    );
}

export default ResetPassword;
