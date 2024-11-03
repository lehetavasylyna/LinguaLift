import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lessons from './pages/Lessons/Lessons';
import Register from './pages/RegisterPage/Register';
import Profile from './pages/Profile/Profile';
import UserVocabulary from './pages/UserVocabulary/UserVocabulary';
import Login from './pages/LoginPage/Login';
import Tests from './pages/Lesson/Tests/Tests';
import TestList from './pages/Lesson/TestListPage/TestList';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<ProtectedRoute element={<Lessons />} />} />
                <Route path="/lessons/:id/tests" element={<ProtectedRoute element={<TestList />} />} />
                <Route path="/lessons/:id/tests/:testId" element={<ProtectedRoute element={<Tests />} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/vocabulary" element={<ProtectedRoute element={<UserVocabulary />} />} />
                <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
