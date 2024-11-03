import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const loadTests = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/lessons`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch lessons');
                }

                const data = await response.json();
                const lessonsArray = data.data.lessons;

                setTests(lessonsArray);
            } catch (error) {
                console.error('Error fetching tests:', error.message);
            }
        };

        loadTests();
    }, []);

    const lesson = tests.find((lesson) => lesson.id === lessonId);
    const testGroups = lesson ? lesson.tests : [];

    const isTestAccessible = (testIndex) => {
        const score = userResults[lessonId]?.[testIndex]?.score || 0;
        const attempts = userResults[lessonId]?.[testIndex]?.attempts || 0;
        return !(score === 100 || attempts >= 3);
    };

    const handleTestSelect = (testIndex) => {
        if (!isTestAccessible(testIndex)) {
            alert('Цей тест недоступний, оскільки ви досягли максимальних спроб або пройшли тест.');
            return;
        }
        setSelectedTest(testIndex);
    };

    return (
        <div className={styles.tests}>
            <Header />
            <h1>{lesson ? lesson.title : 'Завантаження...'}</h1>
            <div className={styles.content}>
                {selectedTest === null ? (
                    <TestList
                        tests={testGroups.map((test, index) => ({
                            ...test,
                            label: `Test ${index + 1} of ${lesson.title}`,
                        }))}
                        onTestSelect={handleTestSelect}
                    />
                ) : (
                    <TestPage
                        questions={lesson ? lesson.tests[selectedTest] : []}
                        onSubmit={(answers) => {
                            const score = calculateScore(answers, lesson.tests[selectedTest].correctAnswers);
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
            </div>
            <Footer />
        </div>
    );
}

export default Test;
