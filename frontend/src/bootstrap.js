import React from 'react';
import { createRoot } from 'react-dom/client';

// import { App } from './App';
import App from './App';

let c = 12;
console.log(c);

const domNode = document.querySelector('#react-app');
const root = createRoot(domNode);

root.render(<App />);
