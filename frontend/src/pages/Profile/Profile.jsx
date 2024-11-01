import styles from './Profile.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useAuthContext } from '../../contexts/AuthContext';

function Profile() {
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className={styles.profile}>
            <Header />
            <div className={styles.contentContainer}>
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
                                <Link to="/profile/edit" className={styles.btn}>
                                    Редагувати профіль
                                </Link>
                                <button className={styles.btn} onClick={handleLogout}>
                                    Вийти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
