import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layout/admin-layout';
import DashboardPage from '../pages/dashboard';
import SettingsPage from '../pages/settings-page';
import StaffPage from '../pages/staff-page';
import StudentsPage from '../pages/students-page';
import AddStudentPage from '../pages/add-student-page';
import StudentProfilePage from '../pages/student-profile-page';

const AdminRoutes = () => {
	return (
		<AdminLayout>
			<Routes>
				<Route path='/' element={<DashboardPage />} />
				<Route path='/student' element={<StudentsPage />} />
				<Route path='/staff' element={<StaffPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/new-student'  element={<AddStudentPage />} />
				<Route path='/student-profile'  element={<StudentProfilePage />} />
			</Routes>
		</AdminLayout>
	);
};

export default AdminRoutes;