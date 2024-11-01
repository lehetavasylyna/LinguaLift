import React, { useState } from 'react';
import styles from './Register.module.css';
import RegisterComp from '../../components/Auth/Register';

function Register() {
    const [isRegistered, setIsRegistered] = useState(false);

    const onRegister = () => {
        setIsRegistered(true);
    };
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
                <RegisterComp onRegister={onRegister} />
            </div>
        </div>
    );
}

export default Register;
