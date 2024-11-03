import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';

export const RegisterComp = ({ isRegistration }) => {
    const { isReg, setFirstName, setEmail, setPassword, toggleForm, handleRegister, handleLogin } = useAuth();
    const [step, setStep] = useState(1);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('Україна');
    const [englishLevel, setEnglishLevel] = useState('A1');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleNextStep = (e) => {
        e.preventDefault();

        // if (password !== confirmPassword) {
        //     setErrorMessage('Паролі не збігаються!');
        //     setPassword('');
        //     setConfirmPassword('');
        //     return;
        // }

        setErrorMessage('');
        setStep(2);
    };

    const toggleStep = () => {
        setStep((prevStep) => (prevStep === 1 ? 2 : 1));
    };

    return (
        <div className={styles.mainContainer}>
            <a className={styles.backToHome} href="/">
                ⬅
            </a>
            <span className={styles.register}>Реєстрація</span>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            {step === 1 ? (
                <form onSubmit={handleNextStep} className={styles.userInput}>
                    <div className={styles.input}>
                        <input
                            type="email"
                            placeholder="Електронна пошта"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="text"
                            placeholder="Користувацьке ім’я"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="password"
                            placeholder="Пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="password"
                            placeholder="Підтвердити пароль"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className={styles.registerBtn} type="submit">
                        Далі
                    </button>
                </form>
            ) : (
                <form onSubmit={handleRegister} className={`${styles.userInput} ${styles.step2}`}>
                    <div className={styles.input}>
                        <label>
                            Стать:
                            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                                <option value="">Оберіть стать</option>
                                <option value="Чоловіча">Чоловіча</option>
                                <option value="Жіноча">Жіноча</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.input}>
                        <input
                            type="date"
                            placeholder="Дата народження"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <label>
                            Країна:
                            <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                                <option value="Україна">Україна</option>
                                <option value="Польща">Польща</option>
                                <option value="Німеччина">Німеччина</option>
                                <option value="США">США</option>
                                <option value="Франція">Франція</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.input}>
                        <label>
                            Рівень знань англійської:
                            <select value={englishLevel} onChange={(e) => setEnglishLevel(e.target.value)} required>
                                <option value="A1">A1 (Початковий)</option>
                                <option value="A2">A2 (Елементарний)</option>
                                <option value="B1">B1 (Середній)</option>
                                <option value="B2">B2 (Вище середнього)</option>
                                <option value="C1">C1 (Вищий)</option>
                                <option value="C2">C2 (Досвідчений)</option>
                            </select>
                        </label>
                    </div>
                    <button className={styles.registerBtn} type="submit" disabled={loading}>
                        {loading ? 'Реєстрація...' : 'Завершити реєстрацію'}
                    </button>
                    <button type="button" onClick={toggleStep} className={styles.toggleStepBtn}>
                        Повернутися до кроку 1
                    </button>
                </form>
            )}
            <a href="/login" className={styles.login}>
                Увійти
            </a>
        </div>
    );
};

export default RegisterComp;
