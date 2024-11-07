import React from 'react';
import { mount } from 'cypress/react';
import LessonCard from './LessonCard';
import styles from './LessonCard.module.css';

describe('LessonCard Component', () => {
    const title = 'Test Lesson';
    const difficulty = 'Medium';
    const date = '2024-11-03';
    const points = 10;

    beforeEach(() => {
        mount(<LessonCard title={title} difficulty={difficulty} date={date} points={points} />);
    });

    it('renders the lesson title', () => {
        cy.get(`.${styles.title}`).contains(title).should('be.visible');
    });

    it('displays the correct points', () => {
        cy.get(`.${styles.point}`).contains(`+${points}`).should('be.visible');
    });

    it('shows the correct difficulty color', () => {
        const difficultyClass = styles.medium;
        cy.get(`.${styles.circle}`).should('have.class', difficultyClass);
    });

    it('displays the difficulty level', () => {
        cy.get(`.${styles.diff}`).contains(difficulty).should('be.visible');
    });
});
