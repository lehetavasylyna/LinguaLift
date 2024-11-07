import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './TestList.module.css';

export const TestList = ({ tests, onTestSelect, lessonTopic }) => {
    const { id } = useParams();
    const lessonId = parseInt(id);
    return (
        <div className={styles.testList}>
            {tests.map((test, index) => (
                <div key={test.id} className={styles.testItem}>
                    <h2 className={styles.testLabel}>{test.label}</h2>
                    <Link
                        to={`/lessons/${lessonId}/tests/${index}`}
                        className={styles.testLink}
                        onClick={() => onTestSelect(index)}
                    >
                        <div className={styles.card}>{test.name}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TestList;
