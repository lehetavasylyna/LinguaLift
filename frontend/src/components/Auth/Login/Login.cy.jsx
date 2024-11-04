import React from 'react';
import LoginComp from './Login';
import useAuth from '../../../hooks/useAuth';
import { mount } from 'cypress/react';

Cypress.Commands.add('setupMocks', () => {
    const mockSetEmail = cy.spy().as('setEmail');
    const mockSetPassword = cy.spy().as('setPassword');
    const mockHandleLogin = cy.spy().as('handleLogin');
    cy.stub(useAuth, 'default').returns({
        isReg: false,
        setFirstName: cy.spy(),
        setEmail: mockSetEmail,
        setPassword: mockSetPassword,
        toggleForm: cy.spy(),
        handleRegister: cy.spy(),
        handleLogin: mockHandleLogin,
        loading: false,
    });
});

describe('LoginComp Component', () => {
    beforeEach(() => {
        cy.setupMocks();
        mount(<LoginComp />);
    });

    it('renders the login form', () => {
        cy.get('.login').contains('Вхід').should('be.visible');
        cy.get('.email').should('exist');
        cy.get('.password').should('exist');
        cy.get('.loginBtn').contains('Увійти').should('be.visible');
    });

    it('calls setEmail and setPassword on input change', () => {
        cy.get('.email').type('test@example.com');
        cy.get('@setEmail').should('have.been.calledWith', 'test@example.com');

        cy.get('.password').type('password123');
        cy.get('@setPassword').should('have.been.calledWith', 'password123');
    });

    it('calls handleLogin on login button click', () => {
        cy.get('.loginBtn').click();
        cy.get('@handleLogin').should('have.been.called');
    });

    it('disables the login button when loading', () => {
        cy.setupMocks();
        cy.stub(useAuth, 'default').returns({
            loading: true,
        });

        mount(<LoginComp />);

        cy.get('.loginBtn').should('be.disabled');
    });

    it('displays an error message if errorMessage is set', () => {
        mount(<LoginComp />);
        cy.get('.error').should('not.exist');

        cy.get('.error').contains('Помилка').should('exist');
    });
});
