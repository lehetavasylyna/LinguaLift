import React from 'react';
import { mount } from 'cypress/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {
    beforeEach(() => {
        mount(
            <Router>
                <Header />
            </Router>,
        );
    });

    it('displays the logo with correct source and alt text', () => {
        cy.get('[class^="Header-module_logo"]').should('have.attr', 'src').and('include', 'logo.png');
        cy.get('[class^="Header-module_logo"]').should('have.attr', 'alt', 'Logo');
    });

    it('contains navigation links', () => {
        cy.get('[class^="Header-module_menuBtn"]').contains('Головна').should('have.attr', 'href', '/');
        cy.get('[class^="Header-module_menuBtn"]')
            .contains('Уроки')
            .should('have.attr', 'href')
            .and('match', /\/(login|lessons)$/);
        cy.get('[class^="Header-module_menuBtn"]')
            .contains('Словник')
            .should('have.attr', 'href')
            .and('match', /\/(login|vocabulary)$/);
    });

    it('shows "Увійти" and "Зареєструватися" when not authenticated', () => {
        localStorage.removeItem('token');
        cy.get('[class^="Header-module_authBtn"]').contains('Зареєструватися').should('have.attr', 'href', '/register');
        cy.get('[class^="Header-module_authBtn"]').contains('Увійти').should('have.attr', 'href', '/login');
    });
});
