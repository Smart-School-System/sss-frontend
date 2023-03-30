import React, {useState} from 'react';
import Tabs from '../components/commons/tabs-toggle';
import AdminLayout from '../layout/admin-layout';

const SettingsPage = () => {
    const [tab, setTab] = useState('Profile Details')

	return (
		<AdminLayout>
            <Tabs tabs={['Account Settings', 'User Roles', '', '']} getTab={setTab} />
            <p>{tab}</p>
		</AdminLayout>
	);
};

export default SettingsPage;