import React from 'react';
import { mount } from 'cypress/react';
import ProgressBar from './ProgressBar';
import styles from './ProgressBar.module.css';

describe('ProgressBar Component', () => {
    it('renders correctly with given progress', () => {
        const progress = 50;
        mount(<ProgressBar progress={progress} />);
        cy.get(`.${styles.progressBarFill}`).should('have.css', 'width', '50%');
    });

    it('renders with 0% progress', () => {
        const progress = 0;
        mount(<ProgressBar progress={progress} />);
        cy.get(`.${styles.progressBarFill}`).should('have.css', 'width', '0%');
    });

    it('renders with 100% progress', () => {
        const progress = 100;
        mount(<ProgressBar progress={progress} />);
        cy.get(`.${styles.progressBarFill}`).should('have.css', 'width', '100%');
    });

    it('renders correctly when no progress is provided', () => {
        mount(<ProgressBar />);
        cy.get(`.${styles.progressBarFill}`).should('have.css', 'width', '0%');
    });
});
