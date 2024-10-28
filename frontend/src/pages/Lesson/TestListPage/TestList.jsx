import styles from './TestList.css';

import React from 'react';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestList } from '../../../components/TestList';

function Test() {
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
                <a href="./lessons/:id" className={styles.backBtn}>
                    ⬅ Назад
                </a>
                <TestList tests={testData} />
            </div>
            <Footer />
        </div>
    );
}

export default Test;
