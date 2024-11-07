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

    return (
        <div className={styles.profile}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.generalInfo}>
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
