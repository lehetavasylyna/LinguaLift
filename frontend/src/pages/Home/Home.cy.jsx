import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { LessonCard } from '../../components/LessonCard';

describe('Home Component', () => {
    beforeEach(() => {
        cy.stub(window, 'alert').as('alert');
        mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
    });

    it('renders the header, footer, and buttons', () => {
        cy.get('header').should('exist');
        cy.get('footer').should('exist');
        cy.contains('Почнемо!').should('be.visible');
        cy.contains('Ще...').should('be.visible');
        cy.contains('Hello! Are you ready to study?').should('be.visible');
    });

    it('renders lesson cards with correct titles and difficulties', () => {
        cy.get('.lessonsCard').should('have.length', 4);
        cy.get('.lessonsCard').each((card, index) => {
            cy.wrap(card)
                .find('.title')
                .should('contain', `Урок ${index + 1}`);
            const difficulty = index % 3 === 0 ? 'Easy' : index % 3 === 1 ? 'Medium' : 'Hard';
            cy.wrap(card).find('.diff').should('contain', difficulty);
        });
    });

    it('navigates to lessons when clicking "Почнемо!" if registered', () => {
        const isRegistered = true;
        localStorage.setItem('isRegistered', isRegistered);
        cy.get('.letsStartBtn').click();
        cy.url().should('include', '/lessons');
    });

    it('navigates to login when clicking "Почнемо!" if not registered', () => {
        const isRegistered = false;
        localStorage.setItem('isRegistered', isRegistered);
        cy.get('.letsStartBtn').click();
        cy.url().should('include', '/login');
    });

    it('navigates to lessons when clicking "Ще..." if registered', () => {
        const isRegistered = true;
        localStorage.setItem('isRegistered', isRegistered);
        cy.get('.moreBtn').click();
        cy.url().should('include', '/lessons');
    });

    it('navigates to login when clicking "Ще..." if not registered', () => {
        const isRegistered = false;
        localStorage.setItem('isRegistered', isRegistered);
        cy.get('.moreBtn').click();
        cy.url().should('include', '/login');
    });
});
