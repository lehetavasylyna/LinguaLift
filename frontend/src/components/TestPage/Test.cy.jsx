import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TestPage from './Test';

describe('TestPage Component', () => {
    const questions = [
        {
            question: 'Question 1?',
            options: ['Option 1', 'Option 2', 'Option 3'],
            correctAnswer: 'Option 1',
        },
        {
            question: 'Question 2?',
            options: ['Option A', 'Option B', 'Option C'],
            correctAnswer: 'Option B',
        },
    ];

    const onSubmit = cy.stub();

    it('renders questions and options', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests/0']}>
                <Route path="/lessons/:id/tests/:testId">
                    <TestPage questions={questions} onSubmit={onSubmit} />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Question 1?').should('be.visible');
        questions[0].options.forEach((option) => {
            cy.contains(option).should('be.visible');
        });
    });

    it('allows selecting an answer and moves to the next question', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests/0']}>
                <Route path="/lessons/:id/tests/:testId">
                    <TestPage questions={questions} onSubmit={onSubmit} />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Option 1').click();
        cy.contains('Question 2?').should('be.visible');
        cy.contains('Option A').should('be.visible');
    });

    it('calculates score and shows results after submitting', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests/0']}>
                <Route path="/lessons/:id/tests/:testId">
                    <TestPage questions={questions} onSubmit={onSubmit} />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Option 1').click();
        cy.contains('Option B').click();
        cy.contains('Надіслати').click();
        cy.contains('Ваш результат: 100%').should('be.visible');
    });

    it('allows retrying the test and updating attempt count', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests/0']}>
                <Route path="/lessons/:id/tests/:testId">
                    <TestPage questions={questions} onSubmit={onSubmit} />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Option 1').click();
        cy.contains('Option B').click();
        cy.contains('Надіслати').click();
        cy.contains('Спробувати ще раз').click();
        cy.contains('Question 1?').should('be.visible');
    });

    it('navigates back to tests', () => {
        mount(
            <MemoryRouter initialEntries={['/lessons/1/tests/0']}>
                <Route path="/lessons/:id/tests/:testId">
                    <TestPage questions={questions} onSubmit={onSubmit} />
                </Route>
            </MemoryRouter>,
        );
        cy.contains('Option 1').click();
        cy.contains('Option B').click();
        cy.contains('Надіслати').click();
        cy.contains('Повернутись до всіх тестів').click();
        cy.url().should('include', '/lessons/1/tests');
    });
});
