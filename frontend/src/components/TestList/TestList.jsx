import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

import styles from './TestList.css';

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
=======
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
>>>>>>> backend_dev
                </div>
            ))}
        </div>
    );
};

export default TestList;
