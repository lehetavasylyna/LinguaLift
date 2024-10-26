import styles from './Home.css';

import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';

function Home() {
    return (
        <div className="home">
            <div className="content-container">
                <div className={styles.mainContent}>
                    <Header />

                    <div className={styles.letsStart}>
                        <div className={styles.letsStartBtn}>Почнемо!</div>
                    </div>

                    <p className={styles.greeting}>Hello! Are you ready to study?</p>

                    <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
                </div>

                <div className={styles.lessonsContainer}>
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                </div>

                <div className={styles.more}>
                    <div className={styles.moreBtn}>Ще...</div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
