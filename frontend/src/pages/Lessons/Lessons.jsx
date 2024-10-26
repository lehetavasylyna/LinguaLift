import styles from './Lessons.css';

import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';

function Home() {
    return (
        <div className={styles.lessons}>
            <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <Header />

                    <div className={styles.searchedDiv}>
                        <input type="text" placeholder="Уведіть назву теми" />
                        <div className={styles.search}>
                            <img src="../../../assets/img/search.png" />
                        </div>
                    </div>

                    <div className={styles.sortOptions}>
                        <select>
                            <option value="newest">Найновіші</option>
                            <option value="oldest">Найстаріші</option>
                            <option value="easiest">Найлегші</option>
                            <option value="hardest">Найважчі</option>
                        </select>
                    </div>
                </div>

                <div className={styles.lessonsContainer}>
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                    <LessonCard className={styles.lessonsCard} />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Home;
