import React from 'react';
import styles from './TestList.css';

export const TestsList = ({ tests }) => {
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={index} className={styles.testItem}>
                    <div className={styles.card}>
                        <span className={styles.name}>{test.name}</span>
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

export default TestsList;
