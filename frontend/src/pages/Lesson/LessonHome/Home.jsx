import React from 'react';
import styles from './Home.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import LessonDescription from '../../../components/LessonDescription';

export const LessonHome = () => {
    return (
        <div className={styles.mainContent}>
            <Header />
            <div className={styles.wrapper}>
                <img className={styles.background} src="../../../assets/img/back.png" alt="background" />

                <span className={styles.title}>Артикль a/an, the</span>

                <div className={styles.section}>
                    <div className={styles.circle}></div>
                    <div className={styles.diff}>Elementary</div>
                </div>

                <LessonDescription />

                <button className={styles.startBtn}>Почати</button>
            </div>
            <Footer />
        </div>
    );
};

export default LessonHome;
