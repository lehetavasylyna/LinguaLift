import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Test from './TestList';

describe('Test Component', () => {
    beforeEach(() => {
        cy.stub(window, 'alert').as('alert');
    });

    it('renders the lesson title and loading message', () => {
        mount(
            <MemoryRouter initialEntries={['/tests/1']}>
                <Route path="/tests/:id">
                    <Test />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Завантаження...').should('be.visible');
    });

    it('fetches and displays tests', () => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/lessons', {
            statusCode: 200,
            body: {
                data: {
                    lessons: [
                        {
                            id: 1,
                            title: 'Lesson 1',
                            tests: [
                                { id: 1, correctAnswers: [1, 2] },
                                { id: 2, correctAnswers: [2, 3] },
                            ],
                        },
                    ],
                },
            },
        }).as('fetchLessons');

        mount(
            <MemoryRouter initialEntries={['/tests/1']}>
                <Route path="/tests/:id">
                    <Test />
                </Route>
            </MemoryRouter>,
        );

        cy.wait('@fetchLessons');
        cy.contains('Lesson 1').should('be.visible');
        cy.get('.test-list').should('exist');
    });

    it('handles test selection and alerts when test is not accessible', () => {
        cy.intercept('GET', 'http://localhost:3000/api/v1/lessons', {
            statusCode: 200,
            body: {
                data: {
                    lessons: [
                        {
                            id: 1,
                            title: 'Lesson 1',
                            tests: [
                                { id: 1, correctAnswers: [1, 2] },
                                { id: 2, correctAnswers: [2, 3] },
                            ],
                        },
                    ],
                },
            },
        }).as('fetchLessons');

        mount(
            <MemoryRouter initialEntries={['/tests/1']}>
                <Route path="/tests/:id">
                    <Test />
                </Route>
            </MemoryRouter>,
        );

        cy.wait('@fetchLessons');
        cy.get('.test-list').find('button').first().click();
        cy.get('@alert').should(
            'be.calledWith',
            'Цей тест недоступний, оскільки ви досягли максимальних спроб або пройшли тест.',
        );
    });

    it('submits answers and updates user results', () => {
        const testIndex = 0;

        cy.intercept('GET', 'http://localhost:3000/api/v1/lessons', {
            statusCode: 200,
            body: {
                data: {
                    lessons: [
                        {
                            id: 1,
                            title: 'Lesson 1',
                            tests: [
                                { id: 1, correctAnswers: [1, 2] },
                                { id: 2, correctAnswers: [2, 3] },
                            ],
                        },
                    ],
                },
            },
        }).as('fetchLessons');

        mount(
            <MemoryRouter initialEntries={['/tests/1']}>
                <Route path="/tests/:id">
                    <Test />
                </Route>
            </MemoryRouter>,
        );

        cy.wait('@fetchLessons');
        cy.get('.test-list').find('button').first().click();

        const answers = [1, 2];
        cy.get('.test-page').find('form').submit();

        cy.get('.test-page').should('not.exist');
        cy.get('.test-list').should('exist');
    });
});
