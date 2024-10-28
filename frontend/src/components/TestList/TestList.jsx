import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TestList.css';

export const TestList = ({ tests }) => {
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={index} className={styles.testItem}>
                    <Link to={`/lessons/${lessonId}/tests/${index}`} className={styles.testLink}>
                        {test.name}
                    </Link>
                    <div className={styles.attempts}>
                        {test.attempts.map((attempt, idx) => (
                            <span key={idx} className={styles.attempt}>
                                {attempt}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestList;
