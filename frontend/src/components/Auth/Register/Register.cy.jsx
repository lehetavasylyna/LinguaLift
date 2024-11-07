import React from 'react';
import { mount } from 'cypress/react';
import RegisterComp from './Register';
import useAuth from '../../../hooks/useAuth';

const mockSetFirstName = cy.spy().as('setFirstName');
const mockSetEmail = cy.spy().as('setEmail');
const mockSetPassword = cy.spy().as('setPassword');
const mockHandleRegister = cy.spy().as('handleRegister');

Cypress.Commands.add('setupMocks', () => {
    cy.stub(useAuth, 'default').returns({
        isReg: false,
        setFirstName: mockSetFirstName,
        setEmail: mockSetEmail,
        setPassword: mockSetPassword,
        toggleForm: cy.spy(),
        handleRegister: mockHandleRegister,
        loading: false,
        register: cy.spy(),
    });
});

describe('RegisterComp Component', () => {
    beforeEach(() => {
        cy.setupMocks();
        mount(<RegisterComp />);
    });

    it('renders the registration form', () => {
        cy.get('.mainContainer').should('exist');
        cy.get('.register').contains('Реєстрація').should('be.visible');
        cy.get('input[placeholder="Електронна пошта"]').should('exist');
        cy.get('input[placeholder="Користувацьке ім’я"]').should('exist');
        cy.get('input[placeholder="Пароль"]').should('exist');
        cy.get('input[placeholder="Підтвердити пароль"]').should('exist');
        cy.get('.registerBtn').contains('Реєстрація').should('be.visible');
    });

    it('calls setEmail, setFirstName, setPassword on input change', () => {
        cy.get('input[placeholder="Електронна пошта"]').type('test@example.com');
        cy.get('@setEmail').should('have.been.calledWith', 'test@example.com');

        cy.get('input[placeholder="Користувацьке ім’я"]').type('TestUser');
        cy.get('@setFirstName').should('have.been.calledWith', 'TestUser');

        cy.get('input[placeholder="Пароль"]').type('password123');
        cy.get('@setPassword').should('have.been.calledWith', 'password123');

        cy.get('input[placeholder="Підтвердити пароль"]').type('password123');
    });

    it('calls handleRegister on register button click', () => {
        cy.get('.registerBtn').click();
        cy.get('@handleRegister').should('have.been.called');
    });

    it('displays loading text on register button when loading is true', () => {
        cy.setupMocks();
        cy.stub(useAuth, 'default').returns({
            ...useAuth.default(),
            loading: true,
        });

        mount(<RegisterComp />);

        cy.get('.registerBtn').should('be.disabled').and('contain', 'Реєстрація...');
    });

    it('shows error message if errorMessage is set', () => {
        cy.get('.error').should('not.exist');

        cy.mount(<RegisterComp />);
        cy.get('.error').contains('Помилка').should('exist');
    });
});
