<<<<<<< HEAD
import styles from './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';
=======
import styles from './Home.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> backend_dev

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { LessonCard } from '../../components/LessonCard';

const Home = () => {
<<<<<<< HEAD
    const lessonId = 1;
=======
    const navigate = useNavigate();
    const lessonId = 1;

    const getPointsForDifficulty = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 5;
            case 'Medium':
                return 10;
            case 'Hard':
                return 15;
            default:
                return 0;
        }
    };

    const handleStartClick = () => {
        if (isRegistered) {
            navigate('/lessons');
        } else {
            navigate('/login');
        }
    };

    const handleMoreClick = () => {
        if (isRegistered) {
            navigate('/lessons');
        } else {
            navigate('/login');
        }
    };

>>>>>>> backend_dev
    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
<<<<<<< HEAD
                    <div className={styles.letsStart}>
                        <Link to={'/lessons'} className={styles.letsStartBtn}>
                            Почнемо!
                        </Link>
                    </div>

                    <p className={styles.greeting}>Hello! Are you ready to study?</p>

=======
                    <button onClick={handleStartClick} className={styles.letsStartBtn}>
                        Почнемо!
                    </button>
                    <p className={styles.greeting}>Hello! Are you ready to study?</p>
>>>>>>> backend_dev
                    <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
                </div>

                <div className={styles.lessonsContainer}>
<<<<<<< HEAD
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
=======
                    {[...Array(4)].map((_, index) => {
                        const difficulty = index % 3 === 0 ? 'Easy' : index % 3 === 1 ? 'Medium' : 'Hard';
                        const points = getPointsForDifficulty(difficulty);
                        return (
                            <Link to={'/lessons'} key={index}>
                                <LessonCard
                                    className={styles.lessonsCard}
                                    title={`Урок ${index + 1}`}
                                    difficulty={difficulty}
                                    date={`2024-11-0${index + 1}`}
                                    points={points}
                                />
                            </Link>
                        );
                    })}
                </div>
                <div className={styles.more}>
                    <button onClick={handleMoreClick} className={styles.moreBtn}>
                        Ще...
                    </button>
>>>>>>> backend_dev
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
