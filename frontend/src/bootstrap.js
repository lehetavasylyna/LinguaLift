// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import React from 'react';

// import App from "./App";
import { App } from './App';

const domNode = document.getElementById('react-app');
const root = createRoot(domNode);

root.render(<App />);
