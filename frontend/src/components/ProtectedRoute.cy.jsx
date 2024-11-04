import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

describe('ProtectedRoute Component', () => {
    const MockComponent = () => <div>Protected Content</div>;

    beforeEach(() => {
        localStorage.clear();
    });

    it('renders the element when authenticated', () => {
        localStorage.setItem('token', 'test-token');
        mount(
            <MemoryRouter>
                <ProtectedRoute element={<MockComponent />} />
            </MemoryRouter>,
        );
        cy.contains('Protected Content').should('be.visible');
    });

    it('redirects to login when not authenticated', () => {
        mount(
            <MemoryRouter initialEntries={['/protected']}>
                <ProtectedRoute element={<MockComponent />} />
            </MemoryRouter>,
        );
        cy.url().should('include', '/login');
    });
});
