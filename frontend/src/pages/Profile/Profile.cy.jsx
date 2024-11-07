import React from 'react';
import { mount } from 'cypress/react';
import Profile from './Profile';
import useAuth from '../../hooks/useAuth';

jest.mock('../../hooks/useAuth');

describe('Profile Component', () => {
    beforeEach(() => {
        cy.stub(console, 'error');
        useAuth.mockReturnValue({
            logout: cy.stub().resolves(),
        });
        localStorage.setItem('token', 'mock-token');
    });

    it('renders loading state initially', () => {
        mount(<Profile />);
        cy.contains('Loading...').should('exist');
    });

    it('fetches and displays user data', () => {
        const mockUserData = {
            userName: 'John Doe',
            email: 'john.doe@example.com',
        };

        cy.intercept('GET', 'http://localhost:3000/api/v1/users/me', {
            statusCode: 200,
            body: mockUserData,
        }).as('getUserData');

        mount(<Profile />);
        cy.wait('@getUserData');

        cy.get('input[name="userName"]').should('have.value', mockUserData.userName);
        cy.get('input[name="email"]').should('have.value', mockUserData.email);
    });

    it('handles logout', () => {
        const navigateMock = cy.stub();
        cy.stub(require('react-router-dom'), 'useNavigate').returns(navigateMock);

        mount(<Profile />);

        cy.intercept('GET', 'http://localhost:3000/api/v1/users/me', {
            statusCode: 200,
            body: { userName: 'John Doe', email: 'john.doe@example.com' },
        }).as('getUserData');
        cy.wait('@getUserData');

        cy.get('button').contains('Вийти').click();
        cy.wrap(useAuth().logout).should('be.called');
        cy.wrap(navigateMock).should('be.calledWith', '/');
    });

    it('displays error if user data fetch fails', () => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/users/me', {
            statusCode: 500,
            body: {},
        }).as('getUserData');

        mount(<Profile />);
        cy.wait('@getUserData');

        cy.contains('Loading...').should('not.exist');
        cy.get('input[name="userName"]').should('have.value', '');
        cy.get('input[name="email"]').should('have.value', '');
    });
});
