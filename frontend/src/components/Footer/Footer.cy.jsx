import React from 'react';
import { mount } from 'cypress/react';
import Footer from './Footer';
import styles from './Footer.module.css';

describe('Footer Component', () => {
    beforeEach(() => {
        mount(<Footer />);
    });

    it('renders the footer container', () => {
        cy.get('footer').should('have.class', 'container');
    });

    it('displays social media icons', () => {
        cy.get('.footerImgs .networks img').should('have.length', 3);
        cy.get('.footerImgs .networks img').eq(0).should('have.attr', 'src').and('include', 'instagram.png');
        cy.get('.footerImgs .networks img').eq(1).should('have.attr', 'src').and('include', 'facebook.png');
        cy.get('.footerImgs .networks img').eq(2).should('have.attr', 'src').and('include', 'twitter.png');
    });

    it('displays navigation buttons with correct text', () => {
        cy.get('.footerBtns .footerBtn').should('have.length', 4);
        cy.get('.footerBtns .footerBtn').eq(0).should('contain.text', 'Головна').and('have.attr', 'href', '/');
        cy.get('.footerBtns .footerBtn').eq(1).should('contain.text', 'Новини').and('have.attr', 'href', '/');
        cy.get('.footerBtns .footerBtn').eq(2).should('contain.text', 'Про нас').and('have.attr', 'href', '/');
        cy.get('.footerBtns .footerBtn').eq(3).should('contain.text', 'Наша команда').and('have.attr', 'href', '/');
    });
});
