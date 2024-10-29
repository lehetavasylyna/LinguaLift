import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Test.module.css';

export const TestPage = ({ questions, onSubmit, maxAttempts = 3 }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [attempt, setAttempt] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [circles, setCircles] = useState(Array(maxAttempts).fill('notAttempted'));
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);

    const handleAnswer = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const calculateScore = () => {
        const correctAnswers = questions.filter((question, index) => question.correctAnswer === answers[index]);
        return Math.round((correctAnswers.length / questions.length) * 10000) / 100;
    };

    const handleSubmit = () => {
        const score = calculateScore();
        if (score > bestScore) {
            setBestScore(score);
        }
        const newCircles = [...circles];
        newCircles[attempt] = score >= 50 ? 'success' : 'fail';
        setCircles(newCircles);
        setCurrentScore(score);
        setIsResultVisible(true);
    };

    const handleRetry = () => {
        setIsResultVisible(false);
        setCurrentQuestion(0);
        setAnswers(Array(questions.length).fill(null));
        setAttempt(attempt + 1);
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const isLastQuestion = currentQuestion === questions.length - 1;

    return (
        <div className={styles.testPage}>
            <ProgressBar progress={progress} />
            {!isResultVisible ? (
                <>
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className={styles.options}>
                        {questions[currentQuestion].options.map((option, i) => (
                            <button key={i} className={styles.optionButton} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    {isLastQuestion && answers[currentQuestion] && (
                        <button className={styles.submitButton} onClick={handleSubmit}>
                            Надіслати
                        </button>
                    )}
                </>
            ) : (
                <div className={styles.resultContainer}>
                    <h2 className={styles.resultText}>Ваш результат: {currentScore}%</h2>
                    <div className={styles.circlesContainer}>
                        {circles.map((status, i) => (
                            <div key={i} className={`${styles.circle} ${styles[status]}`} />
                        ))}
                    </div>
                    {attempt + 1 < maxAttempts && (
                        <button className={styles.retryButton} onClick={handleRetry}>
                            Спробувати ще раз
                        </button>
                    )}
                    <Link to={`/lessons/${1}/tests`} className={`${styles.retryButton}`}>
                        Повернутись до всіх тестів
                    </Link>
                </div>
            )}
        </div>
    );
};

export default TestPage;
