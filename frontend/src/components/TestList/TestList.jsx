import React from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './TestList.module.css';

export const TestList = ({ tests }) => {
    const { id } = useParams();
    const lessonId = parseInt(id);
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={index} className={styles.testItem}>
                    <div className={styles.card}>
                        <Link to={`/lessons/${lessonId}/tests/${index}`} className={styles.testLink}>
                            {test.name}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TestList;
