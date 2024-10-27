import styles from './Profile.css';
import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.mainContent}>
                    <div className={styles.generalInfo}>
                        <img src="../../../assets/img/female.png" alt="Profile" />
                        <div className={styles.infoContainer}>
                            <div className={styles.general}>Janny</div>
                            <div className={styles.general}>
                                10/10/1999 <span>(25 years old)</span>
                            </div>
                            <div className={styles.general}>Україна</div>

                            <div className={styles.knowledgmentInfo}>
                                <div className={styles.knowledgment}>Рівень: С1</div>
                                <div className={styles.knowledgment}>Загальний бал: 245</div>
                            </div>

                            <div className={styles.btns}>
                                <button className={styles.edit}>Редагувати профіль</button>
                                <button className={styles.exit}>Вийти</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Profile;
