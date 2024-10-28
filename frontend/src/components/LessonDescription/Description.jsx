import React from 'react';
import styles from './Description.css';

export const LessonDescription = () => (
    <div className={styles.wrapper}>
        <div className={styles.box}></div>

        <img src="../../../assets/img/1.jpg" className={styles.lessonImg} />

        <div className={styles.description}>
            Артиклі — це маленькі слова, які визначають іменники. В англійській мові існують два види артиклів:
            визначені (the) і невизначені (a, an).
            <br />
            <br /> Визначений артикль "the" вказує на конкретний об'єкт, відомий слухачеві, тоді як невизначені артиклі
            "a" і "an" використовуються для згадки про будь-який об'єкт із класу. "A" ставиться перед словами, що
            починаються з приголосних, а "an" — перед голосними. <br />
            <br />
            Правильне використання артиклів допомагає зробити мову точнішою і зрозумілішою.
        </div>
    </div>
);

export default LessonDescription;
