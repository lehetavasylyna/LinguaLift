import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Tests from './pages/Lesson/Tests/Tests';
import TestList from './pages/Lesson/TestListPage/TestList';
// import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    // const handleRegistrationSuccess = () => {
    //     setIsRegistered(true);
    // };

    // const ConditionalHeader = () => {
    //     const location = useLocation();
    //     const hideHeaderRoutes = ['/register', '/login', '/resetPassword', '/forgotPassword'];
    //     const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

    //     return !shouldHideHeader ? <Header isRegistered={isRegistered} /> : null;
    // };
    return (
        <AuthProvider>
            <Router>
                <div>
                    {/* <ConditionalHeader /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/lessons" element={<ProtectedRoute element={<Lessons />} />} />
                        <Route path="/lessons/:id" element={<ProtectedRoute element={<LessonHome />} />} />
                        <Route path="/lessons/:id/tests" element={<ProtectedRoute element={<TestList />} />} />
                        <Route path="/lessons/:id/tests/:testId" element={<ProtectedRoute element={<Tests />} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/resetPassword" element={<ResetPassword />} />
                        <Route path="/forgotPassword" element={<ForgotPassword />} />
                        <Route path="/profile/edit" element={<ProtectedRoute element={<EditProfile />} />} />
                        <Route path="/vocabulary" element={<ProtectedRoute element={<UserVocabulary />} />} />
                        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
