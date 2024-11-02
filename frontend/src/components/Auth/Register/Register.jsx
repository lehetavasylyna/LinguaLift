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
    const [country, setCountry] = useState('ukraine');
    const [englishLevel, setEnglishLevel] = useState('a1');
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
                                <option value="male">Чоловіча</option>
                                <option value="female">Жіноча</option>
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
                                <option value="ukraine">Україна</option>
                                <option value="poland">Польща</option>
                                <option value="germany">Німеччина</option>
                                <option value="usa">США</option>
                                <option value="france">Франція</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.input}>
                        <label>
                            Рівень знань англійської:
                            <select value={englishLevel} onChange={(e) => setEnglishLevel(e.target.value)} required>
                                <option value="a1">A1 (Початковий)</option>
                                <option value="a2">A2 (Елементарний)</option>
                                <option value="b1">B1 (Середній)</option>
                                <option value="b2">B2 (Вище середнього)</option>
                                <option value="c1">C1 (Вищий)</option>
                                <option value="c2">C2 (Досвідчений)</option>
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
