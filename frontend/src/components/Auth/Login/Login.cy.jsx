import React from 'react';
import LoginComp from './Login';
import { mount } from 'cypress/react';
import useAuth from '../../../hooks/useAuth';

describe('Login Component', () => {
    const email = 'useremail@gmail.com';
    const password = '12345678';

    beforeEach(() => {
        mount(<LoginComp email={email} password={password} />);
    });

    it('renders LoginComp', () => {
        cy.get('span').contains('Вхід').should('be.visible');
    });

    it('shows email and password input fields', () => {
        customMount(<LoginComp />);
        cy.get('input[name="email"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
    });

    it('disables the login button when loading', () => {
        cy.stub(useAuth, 'default').returns({
            ...useAuth(),
            loading: true,
        });
        customMount(<LoginComp />);
        cy.get('button').contains('Вхід...').should('be.disabled');
    });

    it('calls handleLogin on button click', () => {
        const mockHandleLogin = cy.stub();
        cy.stub(useAuth, 'default').returns({
            ...useAuth(),
            handleLogin: mockHandleLogin,
        });
        customMount(<LoginComp />);
        cy.get('button').contains('Увійти').click();
        cy.wrap(mockHandleLogin).should('have.been.called');
    });
});
