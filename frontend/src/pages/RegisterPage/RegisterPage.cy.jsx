import React from 'react';
import { mount } from 'cypress/react';
import Register from './Register';
import RegisterComp from '../../components/Auth/Register';

jest.mock('../../components/Auth/Register');

describe('Register Component', () => {
    beforeEach(() => {
        RegisterComp.mockImplementation(({ onRegister }) => <button onClick={onRegister}>Register</button>);
    });

    it('renders correctly', () => {
        mount(<Register />);
        cy.contains('Hello! Are you ready to study?').should('exist');
    });

    it('calls onRegister when RegisterComp button is clicked', () => {
        mount(<Register />);
        cy.get('button').contains('Register').click();
        cy.get('.letsStartBtn').should('have.class', 'blur');
    });

    it('updates state on successful registration', () => {
        const { unmount } = mount(<Register />);
        cy.get('button').contains('Register').click();
        unmount();

        mount(<Register />);
        cy.get('.letsStartBtn').should('have.class', 'blur');
    });
});
