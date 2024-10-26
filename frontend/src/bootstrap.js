import React from 'react';
import { createRoot } from 'react-dom/client';

// import { App } from './App';
// import App from './App';
// import Home from './pages/Home/Home.jsx';
// import Lessons from './pages/Lessons/Lessons.jsx';
// import Register from './pages/RegisterPage/Register.jsx';
import LessonHome from './pages/Lesson/LessonHome/Home.jsx';

const domNode = document.querySelector('#react-app');
const root = createRoot(domNode);

root.render(<LessonHome />);
