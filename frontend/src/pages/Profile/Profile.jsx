import styles from './Profile.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { useAuthContext } from '../../contexts/AuthContext';

function Profile() {
    const { logout, user, loadUserProfile } = useAuthContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await loadUserProfile();
                const total = user.scores.reduce((acc, score) => acc + score, 0);
                setTotalScore(total);
            } catch (error) {
                console.error('Error fetching user profile', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [loadUserProfile]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.profile}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <div className={styles.generalInfo}>
                        <img src="../../../assets/img/female.png" alt="Profile" />
                        <div className={styles.infoContainer}>
                            <div className={styles.general}>{user?.name || 'User'}</div>
                            <div className={styles.general}>
                                {user?.dob || '10/10/1999'} <span>({user?.age || '25'} years old)</span>
                            </div>
                            <div className={styles.general}>{user?.country || 'Україна'}</div>
                            <div className={styles.knowledgmentInfo}>
                                <div className={styles.knowledgment}>Рівень: {user?.level || 'C1'}</div>
                            </div>
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
