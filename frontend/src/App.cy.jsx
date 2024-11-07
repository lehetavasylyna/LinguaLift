import React from 'react';
import App from './App';
import { customMount } from '../cypress/support/mount';

describe('<App />', () => {
    it('renders', () => {
        cy.mount(<App />);
    });
});
