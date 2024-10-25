import React from 'react';
import { createRoot } from 'react-dom/client';

// import { App } from './App';
// import App from './App';
// import Home from './pages/Home/Home.jsx';
import Home from './pages/Lessons/Lessons.jsx';

const domNode = document.querySelector('#react-app');
const root = createRoot(domNode);

root.render(<Home />);
