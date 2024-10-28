import React from 'react';

import styles from './Footer.css';

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
                <div className={styles.footerBtn}>Головна</div>
                <div className={styles.footerBtn}>Новини</div>
                <div className={styles.footerBtn}>Про нас</div>
                <div className={styles.footerBtn}>Наша команда</div>
            </div>
        </div>
    </footer>
);

export default Footer;
