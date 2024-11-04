import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Tests from './Tests';
import tests from '../../../../data/data-tests.json';

describe('Tests Component', () => {
    beforeEach(() => {
        cy.stub(console, 'log');
    });

    it('renders header and footer', () => {
        mount(
            <MemoryRouter initialEntries={['/tests/1/0']}>
                <Route path="/tests/:id/:testId">
                    <Tests />
                </Route>
            </MemoryRouter>,
        );
        cy.get('header').should('exist');
        cy.get('footer').should('exist');
    });

    it('displays test data when valid test ID is provided', () => {
        mount(
            <MemoryRouter initialEntries={['/tests/1/0']}>
                <Route path="/tests/:id/:testId">
                    <Tests />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: tests,
        }).as('fetchTests');

        cy.wait('@fetchTests').then(() => {
            cy.contains('Test 1 of Lesson 1').should('be.visible');
            cy.get('.test-page').should('exist');
        });
    });

    it('displays "No test found." message when test does not exist', () => {
        mount(
            <MemoryRouter initialEntries={['/tests/1/5']}>
                <Route path="/tests/:id/:testId">
                    <Tests />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: tests,
        }).as('fetchTests');

        cy.wait('@fetchTests').then(() => {
            cy.contains('No test found.').should('be.visible');
        });
    });

    it('logs submitted answers when test is submitted', () => {
        mount(
            <MemoryRouter initialEntries={['/tests/1/0']}>
                <Route path="/tests/:id/:testId">
                    <Tests />
                </Route>
            </MemoryRouter>,
        );

        cy.intercept('GET', '/data/data-tests.json', {
            statusCode: 200,
            body: tests,
        }).as('fetchTests');

        cy.wait('@fetchTests').then(() => {
            cy.get('.test-page').find('form').submit();
            cy.get(console.log).should('be.calledWith', 'Submitted answers:', Cypress.sinon.match.any);
        });
    });
});
