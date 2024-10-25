import styles from './Lessons.css';

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
                    <input type="text" />
                    <div className={styles.search}></div>
                    <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
                </div>

                <LessonCard />
                <LessonCard />

                <div className={styles.more}>
                    <div className={styles.moreBtn}>Ще...</div>
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default Home;
