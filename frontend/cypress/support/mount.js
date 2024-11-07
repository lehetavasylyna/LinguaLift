import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'cypress/react';

const customMount = (component) => {
    console.log(component);
    return mount(
        <React.StrictMode>
            <BrowserRouter>{component}</BrowserRouter>
        </React.StrictMode>,
    );
};

export { customMount };
