import styles from './EditProfile.css';
import React from 'react';
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
                        <div className={styles.changeInfo}>Змінити пароль</div>
                        <div className={styles.changeInfo}>Уведіть дату народження:</div>
                        <div className={styles.changeInfo}>Уведіть країну походження:</div>
                        <div className={styles.changeInfo}>Уведіть поточний рівень англійської:</div>
                    </div>

                    <div className={styles.inputs}>
                        <input type="text" placeholder="Janny" />
                        <input type="text" placeholder="testemail@gmail.com" />
                        <button className={styles.changePassword}>Змінити пароль</button>
                        <input type="date" placeholder="10/10/1999" />

                        <select id="countrySelect" name="countries">
                            <option value="ukraine">Україна</option>
                            <option value="poland">Польща</option>
                            <option value="germany">Німеччина</option>
                            <option value="usa">США</option>
                            <option value="france">Франція</option>
                        </select>

                        <select id="levelSelect" name="englishLevel">
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
                    <button className={styles.save}>Зберегти</button>
                    <button className={styles.cancel}>Скасувати</button>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default EditProfile;
