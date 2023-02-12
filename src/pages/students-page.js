import React from 'react';
import ListStudents from '../components/list-students';
import JumbotronHeader from '../components/commons/jumbotron-top';

const StudentsPage = () => {
	return (
		<>
			<JumbotronHeader/>
			<ListStudents/>
		</>
	);
};

export default StudentsPage;