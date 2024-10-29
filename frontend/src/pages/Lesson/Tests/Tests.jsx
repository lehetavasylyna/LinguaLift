import styles from './Tests.module.css';

import React from 'react';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestPage } from '../../../components/TestPage';

function Tests() {
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
            <Header />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <TestPage
                        questions={questions}
                        onSubmit={(answers) => console.log('Submitted answers:', answers)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tests;
