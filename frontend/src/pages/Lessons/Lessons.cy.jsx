import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Lessons from './Lessons';
import lessons from '../../../data/data-tests.json';

describe('Lessons Component', () => {
    beforeEach(() => {
        cy.stub(console, 'log');
    });

    it('renders header and footer', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons']}>
                <Route path="/lessons">
                    <Lessons />
                </Route>
            </MemoryRouter>,
        );
        cy.get('header').should('exist');
        cy.get('footer').should('exist');
    });

    it('displays lesson cards based on data', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons']}>
                <Route path="/lessons">
                    <Lessons />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: lessons,
        }).as('fetchLessons');

        cy.wait('@fetchLessons').then(() => {
            lessons.forEach((lesson) => {
                cy.contains(lesson.title).should('be.visible');
            });
        });
    });

    it('filters lessons based on search query', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons']}>
                <Route path="/lessons">
                    <Lessons />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: lessons,
        }).as('fetchLessons');

        cy.wait('@fetchLessons').then(() => {
            cy.get('input[placeholder="Уведіть назву теми"]').type('Lesson 1');
            cy.get('.lessonsContainer').should('contain', 'Lesson 1');
            cy.get('.lessonsContainer').should('not.contain', 'Lesson 2');
        });
    });

    it('sorts lessons by selected option', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons']}>
                <Route path="/lessons">
                    <Lessons />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: lessons,
        }).as('fetchLessons');

        cy.wait('@fetchLessons').then(() => {
            cy.get('.sortedBy').select('hardest');
            cy.get('.lessonsContainer').first().should('contain', 'Lesson 3');
        });
    });

    it('displays "Уроки не знайдені" message when no lessons match search', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons']}>
                <Route path="/lessons">
                    <Lessons />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: lessons,
        }).as('fetchLessons');

        cy.wait('@fetchLessons').then(() => {
            cy.get('input[placeholder="Уведіть назву теми"]').type('Non-existent Lesson');
            cy.get('.noLessons').should('be.visible').and('contain', 'Уроки не знайдені');
        });
    });
});
