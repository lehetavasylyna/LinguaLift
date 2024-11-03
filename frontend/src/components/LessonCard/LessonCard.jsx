import React from 'react';
import styles from './LessonCard.module.css';

export const LessonCard = ({ title, difficulty, date, points }) => {
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return styles.easy;
            case 'Medium':
                return styles.medium;
            case 'Hard':
                return styles.hard;
            default:
                return styles.default;
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.backPoint} />
            <span className={styles.point}>{points ? `+${points}` : ''}</span>
            <div className={styles.wrapper}>
                <span className={styles.title}>{title}</span>
                <div className={styles.img} />

                <div className={styles.section}>
                    <div className={`${styles.circle} ${getDifficultyColor(difficulty)}`} />
                    <span className={styles.diff}>{difficulty}</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default LessonCard;
