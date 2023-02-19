import React from 'react';
import AdminLayout from '../layout/admin-layout';
import ListStudents from '../components/list-students';
import JumbotronHeader from '../components/commons/jumbotron-top';

const StudentsPage = () => {
	return (
		<AdminLayout>
			<JumbotronHeader/>
			<ListStudents/>
		</AdminLayout>
	);
};

export default StudentsPage;