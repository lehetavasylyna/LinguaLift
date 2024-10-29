import styles from './TestList.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestList } from '../../../components/TestList';

function Test() {
    const lessonId = 1;
    const testData = [
        {
            name: 'Test 1',
            attempts: ['success', 'fail', 'notAttempted'],
        },
        {
            name: 'Test 2',
            attempts: ['success', 'success', 'fail'],
        },
        {
            name: 'Test 3',
            attempts: ['success', 'notAttempted', 'notAttempted'],
        },
    ];

    return (
        <div className={styles.tests}>
            <Header />
            <div className={styles.content}>
                <Link to={`/lessons/${lessonId}`} className={styles.backBtn}>
                    ⬅ Назад
                </Link>

                <TestList tests={testData} />
            </div>
            <Footer />
        </div>
    );
}

export default Test;
