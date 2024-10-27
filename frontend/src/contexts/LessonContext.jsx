import React from 'react';
import { useLessons } from '../../contexts/LessonsContext';

const Lessons = () => {
    const { lessons } = useLessons();

    return (
        <div>
            <h1>Lessons</h1>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>{lesson.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Lessons;
