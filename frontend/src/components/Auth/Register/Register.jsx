import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import useAuth from '../../../hooks/useAuth';
import { useAuthContext } from '../../../contexts/AuthContext';

export const RegisterComp = ({ isRegistration }) => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [country, setCountry] = useState('Україна');
    const [englishLevel, setEnglishLevel] = useState('A1');
    const { register, loading } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { updateAuthStatus, loadUserProfile } = useAuthContext();

    const handleNextStep = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Паролі не збігаються!');
            setPassword('');
            setConfirmPassword('');
            return;
        }

        setErrorMessage('');
        setStep(2);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage(null);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Будь ласка, введіть дійсну електронну пошту');
            setEmail('');
            setStep(1);
            return;
        }

        const userData = {
            email,
            userName,
            password,
            passwordConfirm: confirmPassword,
            gender,
            birthDate,
            country,
            englishLevel,
        };

        try {
            const data = await register(userData);
            if (!data) return;

            updateAuthStatus(true);
            await loadUserProfile();

            setEmail('');
            setPassword('');
            setUserName('');
            setGender('');
            setBirthDate('');
            setCountry('');
            setEnglishLevel('');
            setConfirmPassword('');
            navigate('/lessons');
        } catch (error) {
            console.error('Помилка реєстрації:', error);

            if (error.message.includes('email')) {
                setErrorMessage('Будь ласка, введіть дійсну електронну пошту');
                setEmail('');
                setStep(1);
            } else {
                setErrorMessage(error.message);
            }

            setPassword('');
            setConfirmPassword('');
        }
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="text"
                            placeholder="Користувацьке ім’я"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="password"
                            placeholder="Підтвердити пароль"
                            value={confirmPassword}
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
