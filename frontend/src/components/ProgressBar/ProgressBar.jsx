import React from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar({ progress }) {
    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
