import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import tests from '../../../../data/data-tests.json';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { TestList } from '../../../components/TestList';
import { TestPage } from '../../../components/TestPage';
import styles from './TestList.module.css';

function Test() {
    const { id } = useParams();
    const lessonId = parseInt(id);
    const [selectedTest, setSelectedTest] = useState(null);
    const [userResults, setUserResults] = useState({});

    const generateTestData = (tests, lessonId) => {
        const testData = [];
        const lesson = tests.find((lesson) => lesson.id === lessonId);

        if (lesson) {
            for (let i = 1; i <= lesson.number_of_tests; i++) {
                testData.push({
                    name: `Test ${i} of ${lesson.title}`,
                });
            }
        }

        return testData;
    };

    const lesson = tests.find((lesson) => lesson.id === lessonId);
    const testData = generateTestData(tests, lessonId);

    const isTestAccessible = (testIndex) => {
        const score = userResults[lessonId]?.[testIndex]?.score || 0;
        const attempts = userResults[lessonId]?.[testIndex]?.attempts || 0;
        return !(score === 100 || attempts >= 3);
    };

    const handleTestSelect = (index) => {
        if (!isTestAccessible(index)) {
            alert('Цей тест недоступний, оскільки ви досягли 100% або витратили всі спроби.');
            return;
        }
        setSelectedTest(index);
    };

    return (
        <div className={styles.tests}>
            <Header />
            <div className={styles.content}>
                {selectedTest === null ? (
                    <TestList tests={testData} onTestSelect={handleTestSelect} />
                ) : (
                    <TestPage
                        questions={lesson.tests[selectedTest]}
                        onSubmit={(answers) => {
                            const score = calculateScore(answers, lesson.tests[selectedTest]);
                            setUserResults((prev) => ({
                                ...prev,
                                [lessonId]: {
                                    ...prev[lessonId],
                                    [selectedTest]: {
                                        score: score,
                                        attempts: (prev[lessonId]?.[selectedTest]?.attempts || 0) + 1,
                                    },
                                },
                            }));
                            setSelectedTest(null);
                        }}
                    />
                )}
                <Link to={'/lessons'} className={styles.backBtn}>
                    ⬅ Назад
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Test;
