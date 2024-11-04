import React from 'react';
import { mount } from 'cypress/react';
import Login from './Login';
import LoginComp from '../../components/Auth/Login';

describe('Login Component', () => {
    beforeEach(() => {
        cy.stub(console, 'log');
    });

    it('renders background blur', () => {
        mount(<Login />);
        cy.get('.backgroundBlur').should('exist');
    });

    it('renders greeting message', () => {
        mount(<Login />);
        cy.get('.greeting').should('contain', 'Hello! Are you ready to study?');
    });

    it('renders lets start button', () => {
        mount(<Login />);
        cy.get('.letsStartBtn').should('contain', 'Почнемо!');
    });

    it('renders background image', () => {
        mount(<Login />);
        cy.get('img.background').should('have.attr', 'src', '../../../assets/img/back.png');
    });

    it('renders LoginComp component', () => {
        mount(<Login />);
        cy.get('div.registrationContainer').find(LoginComp).should('exist');
    });
});
