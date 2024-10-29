import styles from './ForgotPassword.module.css';
import React from 'react';

import ForgotPasswordComp from '../../components/Auth/ForgotPassword';

function ForgotPassword() {
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
                <ForgotPasswordComp />
            </div>
        </div>
    );
}

export default ForgotPassword;
