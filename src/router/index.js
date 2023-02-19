import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import SettingsPage from '../pages/settings-page';
import StaffPage from '../pages/staff-page';
import StudentsPage from '../pages/students-page';
import AddStudentPage from '../pages/add-student-page';
import StudentProfilePage from '../pages/student-profile-page';
import LoginPage from '../pages/auths/login-page';

const AppRoutes = () => {
	return (
		<Routes>
			{/* Admin Routes */}
			<Route path='/dashboard' element={<DashboardPage />} />
			<Route path='/student' element={<StudentsPage />} />
			<Route path='/staff' element={<StaffPage />} />
			<Route path='/settings' element={<SettingsPage />} />
			<Route path='/new-student' element={<AddStudentPage />} />
			<Route path='/student-profile' element={<StudentProfilePage />} />
			{/* Admin Routes */}


			{/* Auth Routes */}
			<Route path='/' element={<LoginPage/>}/>
		</Routes>
	);
};

export default AppRoutes;