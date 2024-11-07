<<<<<<< HEAD
import styles from './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function Profile() {
=======
import styles from './Profile.module.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import useAuth from '../../hooks/useAuth';

function Profile() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const loadUserData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/users/me`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }

            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

>>>>>>> backend_dev
    return (
        <div className={styles.profile}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.generalInfo}>
<<<<<<< HEAD
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
                                <button className={styles.btn}>Вийти</button>
=======
                        <img src="../../../assets/img/male.png" alt="Profile" />
                        <div className={styles.infoContainer}>
                            <input
                                className={styles.general}
                                name="userName"
                                value={user.userName || ''}
                                placeholder="Name"
                                readOnly
                            />
                            <input
                                className={styles.general}
                                name="email"
                                value={user.email || ''}
                                placeholder="Email"
                                readOnly
                            />
                            <div className={styles.btns}>
                                <button className={styles.btn} onClick={handleLogout}>
                                    Вийти
                                </button>
>>>>>>> backend_dev
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
