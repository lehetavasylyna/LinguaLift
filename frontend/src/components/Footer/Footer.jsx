import React from 'react';

import styles from './Footer.css';

export const Footer = () => (
    <footer className={styles.container}>
        <div className="footer">
            {/* <img className="logo" src="../../../assets/img/logo.png" /> */}
            <div className="menu-btn">Головна</div>
            <div className="menu-btn">Новини</div>
            <div className="menu-btn">Про нас</div>
            <div className="menu-btn">Наша команда</div>
        </div>
    </footer>
);

export default Footer;
