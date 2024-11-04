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

    it('renders the header container', () => {
        cy.get('header').should('have.class', 'container');
    });

    it('displays the logo with correct source and alt text', () => {
        cy.get('.logo').should('have.attr', 'src').and('include', 'logo.png');
        cy.get('.logo').should('have.attr', 'alt', 'Logo');
    });

    it('contains navigation links', () => {
        cy.get('.menuBtn').contains('Головна').should('have.attr', 'href', '/');
        cy.get('.menuBtn')
            .contains('Уроки')
            .should('have.attr', 'href')
            .and('match', /\/(login|lessons)$/);
        cy.get('.menuBtn')
            .contains('Словник')
            .should('have.attr', 'href')
            .and('match', /\/(login|vocabulary)$/);
    });

    it('shows profile link only when authenticated', () => {
        localStorage.setItem('token', 'test-token');
        cy.reload();
        mount(
            <Router>
                <Header />
            </Router>,
        );
        cy.get('.menuBtn').contains('Профіль').should('have.attr', 'href', '/profile');
    });

    it('shows "Увійти" and "Зареєструватися" when not authenticated', () => {
        localStorage.removeItem('token');
        cy.reload();
        cy.get('.authBtn').contains('Зареєструватися').should('have.attr', 'href', '/register');
        cy.get('.authBtn').contains('Увійти').should('have.attr', 'href', '/login');
    });
});
