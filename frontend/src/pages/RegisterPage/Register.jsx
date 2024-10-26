import styles from './Register.css';
import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';
import RegisterComp from '../../components/Auth/Register';

function Register() {
    return (
        <div className={styles.home}>
            <div className={styles.backgroundBlur}></div>
            <Header />

            <div className={styles.contentContainer}>
                <div className={`${styles.letsStart} ${styles.blur}`}>
                    <div className={`${styles.letsStartBtn} ${styles.blur}`}>Почнемо!</div>
                </div>

                <p className={`${styles.greeting} ${styles.blur}`}>Hello! Are you ready to study?</p>
                <img className={`${styles.background} ${styles.blur}`} src="../../../assets/img/back.png" />
            </div>

            <div className={styles.registrationContainer}>
                <RegisterComp />
            </div>
        </div>
    );
}

export default Register;
