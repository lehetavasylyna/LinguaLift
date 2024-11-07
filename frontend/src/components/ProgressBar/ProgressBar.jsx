import React from 'react';
<<<<<<< HEAD
import styles from './ProgressBar.css';
=======
import styles from './ProgressBar.module.css';
>>>>>>> backend_dev

function ProgressBar({ progress }) {
    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default ProgressBar;
