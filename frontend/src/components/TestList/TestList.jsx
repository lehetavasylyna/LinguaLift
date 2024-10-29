import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TestList.module.css';

export const TestList = ({ tests }) => {
    const lessonId = 1;
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={index} className={styles.testItem}>
                    <div className={styles.card}>
                        <Link to={`/lessons/${lessonId}/tests/${index}`} className={styles.testLink}>
                            {test.name}
                        </Link>
                    </div>
                    <div className={styles.attempts}>
                        {test.attempts.map((attempt, i) => (
                            <div key={i} className={`${styles.circle} ${styles[attempt]}`} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestList;
