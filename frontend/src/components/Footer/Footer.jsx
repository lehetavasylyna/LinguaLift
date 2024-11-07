import React from 'react';

import styles from './Footer.module.css';
import './Footer.module.css';
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
            </div>
        </div>
    </footer>
);

export default Footer;
