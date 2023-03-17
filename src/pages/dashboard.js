import React from 'react';
import AdminLayout from '../layout/admin-layout';
import ProtectedRoute from './protected-route';

const DashboardPage = () => {
    return (
        <ProtectedRoute>
            <AdminLayout>
                <h1 className='text-greyFontColor dark:text-darkThemeTextLight'>DashboardPage
                </h1>
            </AdminLayout>
        </ProtectedRoute>
    );
};

export default DashboardPage;