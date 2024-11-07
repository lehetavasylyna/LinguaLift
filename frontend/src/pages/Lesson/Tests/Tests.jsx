import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestPage } from '../../../components/TestPage';
import tests from '../../../../data/data-tests.json';
import styles from './Tests.module.css';

function Tests() {
    const { id, testId } = useParams();
    const lessonId = parseInt(id);
    const selectedTestId = parseInt(testId);

    const generateTestData = (tests, lessonId, testIndex) => {
        const lesson = tests.find((lesson) => lesson.id === lessonId);
        if (lesson && lesson.tests && lesson.tests[testIndex]) {
            const selectedTest = lesson.tests[testIndex];
            return {
                name: `Test ${testIndex + 1} of ${lesson.title}`,
                questions: selectedTest.map((q) => ({
                    question: q.question.replace(/__/, '___'),
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                })),
            };
        }
        return null;
    };

    const testData = generateTestData(tests, lessonId, selectedTestId);

    return (
        <div className={styles.tests}>
            <Header />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    {testData ? (
                        <TestPage
                            questions={testData.questions}
                            onSubmit={(answers) => console.log('Submitted answers:', answers)}
                        />
                    ) : (
                        <p>No test found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Tests;
