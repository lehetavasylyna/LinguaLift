import React from 'react';
import styles from './LessonCard.css';

// import styles from './Lesson.css';

export const LessonCard = () => (
    <div className={styles.main}>
        <div className={styles.backPoint} />
        <span className={styles.point}>+5</span>
        <div className={styles.wrapper}>
            <span className={styles.title}>Артикль a/an, the</span>
            <div className={styles.img} />
            <div className={styles.section}>
                <div className={styles.circle} />
                <span className={styles.diff}>Elementary</span>
            </div>
        </div>
    </div>
);

export default LessonCard;
