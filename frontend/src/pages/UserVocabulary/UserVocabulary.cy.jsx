import React from 'react';
import { mount } from 'cypress/react';
import Vocabulary from './UserVocabulary';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

describe('Vocabulary Component', () => {
    beforeEach(() => {
        mount(<Vocabulary />);
    });

    it('renders correctly', () => {
        cy.contains('Уведіть слово').should('exist');
        cy.contains('Шукати').should('exist');
        cy.contains('Додайте нове слово до словника:').should('not.exist');
    });

    it('searches for a word and highlights it', () => {
        cy.get('input[type="text"]').type('apple');
        cy.get('button').contains('Шукати').click();
        cy.get('.wordEntry').contains('apple').should('exist');
        cy.get('.highlight').should('exist');
    });

    it('displays message when word is not found', () => {
        cy.get('input[type="text"]').type('unknownword');
        cy.get('button').contains('Шукати').click();
        cy.contains('Слово "unknownword" не знайдено.').should('exist');
    });

    it('adds a new word to the vocabulary', () => {
        cy.get('input[type="text"]').type('newword');
        cy.get('button').contains('Шукати').click();
        cy.get('button').contains('Додати слово').should('exist');

        cy.get('input[placeholder="Транскрипція (необов\'язково)"]').type('[nəwˈwɜrd]');
        cy.get('input[placeholder="Переклад (обов\'язково)"]').type('нове слово');
        cy.get('button').contains('Додати слово').click();

        cy.contains('нове слово').should('exist');
    });

    it('cancels adding a new word', () => {
        cy.get('input[type="text"]').type('unknownword');
        cy.get('button').contains('Шукати').click();
        cy.get('button').contains('Додати слово').should('exist');

        cy.get('button').contains('Скасувати').click();
        cy.get('button').contains('Додати слово').should('not.exist');
    });
});
