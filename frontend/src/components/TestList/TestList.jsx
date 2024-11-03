import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './TestList.module.css';

export const TestList = ({ tests, onTestSelect }) => {
    const { id: lessonId } = useParams();
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={index} className={styles.testItem}>
                    <div className={styles.card} onClick={() => onTestSelect(index)}>
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
