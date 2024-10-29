import styles from './Lessons.module.css';
import { Link, useParams } from 'react-router-dom';

import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';

function Lessons() {
    const lessonId = 1;
    return (
        <div className={styles.lessons}>
            <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <Header />

                    <div className={styles.searchedDivLessons}>
                        <input type="text" placeholder="Уведіть назву теми" />
                        <div className={styles.search}>
                            <img src="../../../assets/img/search.png" />
                        </div>
                    </div>

                    <div className={styles.sortOptions}>
                        <select className={styles.sortedBy}>
                            <option value="newest">Найновіші</option>
                            <option value="oldest">Найстаріші</option>
                            <option value="easiest">Найлегші</option>
                            <option value="hardest">Найважчі</option>
                        </select>
                    </div>
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

                <Footer />
            </div>
        </div>
    );
}

export default Lessons;
