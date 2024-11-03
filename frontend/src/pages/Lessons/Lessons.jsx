import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Lessons.module.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import LessonCard from '../../components/LessonCard';
import lessons from '../../../data/data-tests.json';

function Lessons() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('newest');

    const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };

    const filteredLessons = lessons
        .filter((lesson) => lesson.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'newest') return new Date(b.date) - new Date(a.date);
            if (sortOption === 'oldest') return new Date(a.date) - new Date(b.date);
            if (sortOption === 'easiest') return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            if (sortOption === 'hardest') return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
            return 0;
        });

    return (
        <div className={styles.lessons}>
            <img className={styles.background} src="../../../assets/img/back.png" alt="background" />
            <div className={styles.content}>
                <Header />

                <div className={styles.searchedDivLessons}>
                    <input
                        type="text"
                        placeholder="Уведіть назву теми"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className={styles.search}>
                        <img src="../../../assets/img/search.png" alt="search" />
                    </div>
                </div>

                <div className={styles.sortOptions}>
                    <select
                        className={styles.sortedBy}
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="newest">Найновіші</option>
                        <option value="oldest">Найстаріші</option>
                        <option value="easiest">Найлегші</option>
                        <option value="hardest">Найважчі</option>
                    </select>
                </div>

                <div className={styles.lessonsContainer}>
                    {filteredLessons.length > 0 ? (
                        filteredLessons.map((lesson) => (
                            <Link key={lesson.id} to={`/lessons/${lesson.id}/tests`}>
                                <LessonCard
                                    title={lesson.title}
                                    difficulty={lesson.difficulty}
                                    date={lesson.date}
                                    points={lesson.points}
                                />
                            </Link>
                        ))
                    ) : (
                        <p className={styles.noLessons}>Уроки не знайдені</p>
                    )}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Lessons;
