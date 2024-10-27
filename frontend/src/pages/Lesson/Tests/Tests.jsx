import styles from './Tests.css';

import React, { useState } from 'react';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
// import { TestsList } from '../../../components/TestList';
import { TestPage } from '../../../components/TestPage';

function Tests() {
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

    const questions = [
        {
            question: 'This is __ orange.',
            options: ['a', 'an', 'the', '-'],
            correctAnswer: 'an',
        },
        {
            question: 'I have got ___ apple.',
            options: ['a', 'an', 'the', '-'],
            correctAnswer: 'an',
        },
        {
            question: 'He has got __ strawberry.',
            options: ['a', 'an', 'the', '-'],
            correctAnswer: 'a',
        },
    ];

    return (
        <div className={styles.tests}>
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <Header />
                    {/* <a href="./" className={styles.back}>
                        ⬅ Назад
                    </a> */}
                    {/* <TestsList tests={testData} /> */}
                    <TestPage
                        questions={questions}
                        onSubmit={(answers) => console.log('Submitted answers:', answers)}
                    />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Tests;