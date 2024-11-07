import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TestList from './TestList';

describe('TestList Component', () => {
    const tests = [
        { id: 1, label: 'Test 1', name: 'Test One' },
        { id: 2, label: 'Test 2', name: 'Test Two' },
    ];

    const onTestSelect = cy.stub();

    it('renders the correct number of tests', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests']}>
                <Route path="/lessons/:id/tests">
                    <TestList tests={tests} onTestSelect={onTestSelect} />
                </Route>
            </MemoryRouter>,
        );
        cy.get('.testItem').should('have.length', tests.length);
    });

    it('displays test labels and names correctly', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests']}>
                <Route path="/lessons/:id/tests">
                    <TestList tests={tests} onTestSelect={onTestSelect} />
                </Route>
            </MemoryRouter>,
        );
        tests.forEach((test) => {
            cy.contains(test.label).should('be.visible');
            cy.contains(test.name).should('be.visible');
        });
    });

    it('navigates to the correct URL and calls onTestSelect when a test is clicked', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests']}>
                <Route path="/lessons/:id/tests">
                    <TestList tests={tests} onTestSelect={onTestSelect} />
                </Route>
            </MemoryRouter>,
        );
        cy.get('.testLink').first().click();
        cy.url().should('include', '/lessons/1/tests/0');
        expect(onTestSelect).to.have.been.calledWith(0);
    });
});
