import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Test.css';
=======
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Test.module.css';
>>>>>>> backend_dev

export const TestPage = ({ questions, onSubmit, maxAttempts = 3 }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [attempt, setAttempt] = useState(0);
    const [bestScore, setBestScore] = useState(0);
<<<<<<< HEAD
    const [circles, setCircles] = useState(Array(maxAttempts).fill('notAttempted'));
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
=======
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const { id } = useParams();
    const lessonId = parseInt(id);
    const navigate = useNavigate();
>>>>>>> backend_dev

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
<<<<<<< HEAD
        if (score > bestScore) {
            setBestScore(score);
        }
        const newCircles = [...circles];
        newCircles[attempt] = score >= 50 ? 'success' : 'fail';
        setCircles(newCircles);
=======
        if (attempt >= maxAttempts) {
            alert('Ви витратили всі спроби на цей тест!');
            return;
        }
        if (score > bestScore) {
            setBestScore(score);
        }
>>>>>>> backend_dev
        setCurrentScore(score);
        setIsResultVisible(true);
    };

    const handleRetry = () => {
        setIsResultVisible(false);
        setCurrentQuestion(0);
        setAnswers(Array(questions.length).fill(null));
        setAttempt(attempt + 1);
<<<<<<< HEAD
=======
        setCurrentScore(0);
    };

    const handleBackToTests = () => {
        setIsResultVisible(false);
        setCurrentQuestion(0);
        setAnswers(Array(questions.length).fill(null));
        setCurrentScore(0);
        navigate(`/lessons/${lessonId}/tests`);
>>>>>>> backend_dev
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const isLastQuestion = currentQuestion === questions.length - 1;

    return (
        <div className={styles.testPage}>
            <ProgressBar progress={progress} />
            {!isResultVisible ? (
                <>
<<<<<<< HEAD
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className={styles.options}>
                        {questions[currentQuestion].options.map((option, i) => (
=======
                    <h2>{questions[currentQuestion]?.question}</h2>
                    <div className={styles.options}>
                        {questions[currentQuestion]?.options.map((option, i) => (
>>>>>>> backend_dev
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
<<<<<<< HEAD
                    <div className={styles.circlesContainer}>
                        {circles.map((status, i) => (
                            <div key={i} className={`${styles.circle} ${styles[status]}`} />
                        ))}
                    </div>
=======
                    <h3 className={styles.bestScoreText}>Найкращий результат: {bestScore}%</h3>
>>>>>>> backend_dev
                    {attempt + 1 < maxAttempts && (
                        <button className={styles.retryButton} onClick={handleRetry}>
                            Спробувати ще раз
                        </button>
                    )}
<<<<<<< HEAD
                    <Link to={`/lessons/${1}/tests`} className={`${styles.retryButton}`}>
                        Повернутись до всіх тестів
                    </Link>
=======
                    <button className={styles.retryButton} onClick={handleBackToTests}>
                        Повернутись до всіх тестів
                    </button>
>>>>>>> backend_dev
                </div>
            )}
        </div>
    );
};

export default TestPage;
