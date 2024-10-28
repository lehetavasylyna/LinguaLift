import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Lessons from './pages/Lessons/Lessons';
import Register from './pages/RegisterPage/Register';
import LessonHome from './pages/Lesson/LessonHome/Home';
import Profile from './pages/Profile/Profile';
import UserVocabulary from './pages/UserVocabulary/UserVocabulary';
import EditProfile from './pages/EditProfile/EditProfile';
import Login from './pages/LoginPage/Login';
import ResetPassword from './pages/ResetPasswordPage/ResetPassword';
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword';
// import Tests from './pages/Lesson/Tests/Tests';
// import TestList from './pages/Lesson/TestListPage/TestList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lessons/:id" element={<LessonHome />} />
                {/* <Route path="/lessons/:id/tests/:x" element={<Tests />} /> */}
                {/* <Route path="/lessons/:id/tests" element={<TestList />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/resetPassword" element={<ResetPassword />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/vocabulary" element={<UserVocabulary />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
