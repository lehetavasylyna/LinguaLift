import styles from './TestList.module.css';
import tests from '../../../../data/data-tests.json';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestList } from '../../../components/TestList';

function Test() {
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

    const testData = generateTestData(tests, lessonId);

    return (
        <div className={styles.tests}>
            <Header />
            <div className={styles.content}>
                <Link to={'/lessons'} className={styles.backBtn}>
                    ⬅ Назад
                </Link>

                <TestList tests={testData} />
            </div>
            <Footer />
        </div>
    );
}

export default Test;
