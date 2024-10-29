import styles from './EditProfile.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function EditProfile() {
    return (
        <div className={styles.editProfile}>
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.formContainer}>
                    <div className={styles.labels}>
                        <div className={styles.changeInfo}>Змінити ім’я:</div>
                        <div className={styles.changeInfo}>Змінити електронну адресу:</div>
                        <div className={styles.changeInfo}>Уведіть дату народження:</div>
                        <div className={styles.changeInfo}>Уведіть країну походження:</div>
                        <div className={styles.changeInfo}>Уведіть поточний рівень англійської:</div>
                    </div>
                    <div className={styles.inputs}>
                        <input type="text" placeholder="Janny" className={styles.inputName} />
                        <input type="email" placeholder="testemail@gmail.com" className={styles.inputEmail} />

                        <input type="date" placeholder="10/10/1999" className={styles.inputDate} />
                        <select id="countrySelect" name="countries" className={styles.inputCountries}>
                            <option value="ukraine">Україна</option>
                            <option value="poland">Польща</option>
                            <option value="germany">Німеччина</option>
                            <option value="usa">США</option>
                            <option value="france">Франція</option>
                        </select>
                        <select id="levelSelect" name="englishLevel" className={styles.inputLevels}>
                            <option value="a1">A1 (Початковий)</option>
                            <option value="a2">A2 (Елементарний)</option>
                            <option value="b1">B1 (Середній)</option>
                            <option value="b2">B2 (Вище середнього)</option>
                            <option value="c1">C1 (Вищий)</option>
                            <option value="c2">C2 (Досвідчений)</option>
                        </select>
                    </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <Link to="/profile" className={styles.save}>
                        Зберегти
                    </Link>
                    <Link to="/profile" className={styles.cancel}>
                        Скасувати
                    </Link>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default EditProfile;
