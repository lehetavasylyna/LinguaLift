import React from 'react';

<<<<<<< HEAD
import styles from './Footer.css';

=======
import styles from './Footer.module.css';
import './Footer.module.css';
>>>>>>> backend_dev
export const Footer = () => (
    <footer className={styles.container}>
        <div className={styles.group}>
            <div className={styles.footerImgs}>
                <div className={styles.networks}>
                    <img src="../../../assets/img/instagram.png" />
                </div>
                <div className={styles.networks}>
                    <img src="../../../assets/img/facebook.png" />
                </div>
                <div className={styles.networks}>
                    <img src="../../../assets/img/twitter.png" />
                </div>
            </div>
            <div className={styles.footerBtns}>
<<<<<<< HEAD
                <div className={styles.footerBtn}>Головна</div>
                <div className={styles.footerBtn}>Новини</div>
                <div className={styles.footerBtn}>Про нас</div>
                <div className={styles.footerBtn}>Наша команда</div>
=======
                <a href="/" className={styles.footerBtn}>
                    Головна
                </a>
                <a href="/" className={styles.footerBtn}>
                    Новини
                </a>
                <a href="/" className={styles.footerBtn}>
                    Про нас
                </a>
                <a href="/" className={styles.footerBtn}>
                    Наша команда
                </a>
>>>>>>> backend_dev
            </div>
        </div>
    </footer>
);

export default Footer;
