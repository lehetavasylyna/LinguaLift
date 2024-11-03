import styles from './Tests.module.css';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import tests from '../../../../data/data-tests.json';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestPage } from '../../../components/TestPage';

function Tests() {
    const { id } = useParams();
    const lessonId = parseInt(id);

    const generateTestData = (tests, lessonId) => {
        const testData = [];
        const lesson = tests.find((lesson) => lesson.id === lessonId);

        if (lesson) {
            for (let i = 1; i <= lesson.number_of_tests; i++) {
                const attempts = Array.from({ length: 3 }, () => {
                    const outcomes = ['success', 'fail', 'notAttempted'];
                    return outcomes[Math.floor(Math.random() * outcomes.length)];
                });

                testData.push({
                    name: `Test ${i} of ${lesson.title}`,
                    attempts: attempts,
                });
            }
        }

        return testData;
    };

    const transformData = (lesson) => {
        const questions = [];

        if (lesson.tests) {
            lesson.tests.forEach((test) => {
                test.forEach((q) => {
                    questions.push({
                        question: q.question.replace(/__/, '___'),
                        options: q.options,
                        correctAnswer: q.correctAnswer,
                    });
                });
            });
        }

        return questions;
    };

    const lesson = tests.find((lesson) => lesson.id === lessonId);
    const questions = lesson ? transformData(lesson) : [];

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
