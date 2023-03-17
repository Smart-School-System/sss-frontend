import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import SettingsPage from '../pages/settings-page';
import StaffPage from '../pages/staff-page';
import StudentsPage from '../pages/students-page';
import AddStudentPage from '../pages/add-student-page';
import StudentProfilePage from '../pages/student-profile-page';
import LoginPage from '../pages/auths/login-page';
import PageNotFound from '../pages/page-not-found';
import ProtectedRoute from '../pages/protected-route';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Admin Protected Routes */}
            <Route path='/dashboard' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path='/student' element={<ProtectedRoute><StudentsPage /></ProtectedRoute>} />
            <Route path='/staff' element={<ProtectedRoute><StaffPage /></ProtectedRoute>} />
            <Route path='/settings' element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            <Route path='/new-student' element={<ProtectedRoute><AddStudentPage /></ProtectedRoute>} />
            <Route path='/student-profile' element={<ProtectedRoute><StudentProfilePage /></ProtectedRoute>} />
            {/* Admin Protected Routes */}


            {/* Auth Routes */}
            <Route path='/' element={<LoginPage />} />


            {/* 404 Page Route */}
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
};

export default AppRoutes;