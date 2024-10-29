import styles from './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';

const Home = () => {
    const lessonId = 1;
    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.letsStart}>
                        <Link to={'/lessons'} className={styles.letsStartBtn}>
                            Почнемо!
                        </Link>
                    </div>

                    <p className={styles.greeting}>Hello! Are you ready to study?</p>

                    <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
                </div>

                <div className={styles.lessonsContainer}>
                    <Link to={`/lessons/${lessonId}`}>
                        <LessonCard className={styles.lessonsCard} />
                    </Link>
                    <Link to={`/lessons/${lessonId}`}>
                        <LessonCard className={styles.lessonsCard} />
                    </Link>
                    <Link to={`/lessons/${lessonId}`}>
                        <LessonCard className={styles.lessonsCard} />
                    </Link>
                    <Link to={`/lessons/${lessonId}`}>
                        <LessonCard className={styles.lessonsCard} />
                    </Link>
                    <Link to={`/lessons/${lessonId}`}>
                        <LessonCard className={styles.lessonsCard} />
                    </Link>
                </div>

                <div className={styles.more}>
                    <Link to={'/lessons'} className={styles.moreBtn}>
                        Ще...
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
