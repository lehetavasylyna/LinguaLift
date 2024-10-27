import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Lessons from './pages/Lessons/Lessons.jsx';
import Register from './pages/RegisterPage/Register.jsx';
import LessonHome from './pages/Lesson/LessonHome/Home.jsx';
import Profile from './pages/Profile/Profile';
import UserVocabulary from './pages/UserVocabulary/UserVocabulary';
import EditProfile from './pages/EditProfile/EditProfile';
// import Login from './pages/LoginPage/Login.jsx';
// import ResetPassword from './pages/ResetPasswordPage/ResetPassword.jsx';
// import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword.jsx';
// import Tests from './pages/Lesson/Tests/Tests.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lessons/:id" element={<LessonHome />} />
                {/* <Route path="/lessons/:tests/:testId" element={<Tests />} /> */}
                <Route path="/register" element={<Register />} />
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/resetPassword" element={<ResetPassword />} /> */}
                {/* <Route path="/forgitPassword" element={<ForgotPassword />} /> */}
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/vocabulary" element={<UserVocabulary />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
