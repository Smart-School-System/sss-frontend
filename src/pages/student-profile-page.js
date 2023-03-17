import React from 'react';
import AdminLayout from '../layout/admin-layout';
import AddressInfo from '../components/student-profile/address-info';
import TopHeader from '../components/student-profile/header';
import ParentInfo from '../components/student-profile/parent-info';
import PersonalInfo from '../components/student-profile/personal-info-form';
import Button from '../components/commons/button';
import {studentSchema} from '../helpers/form-validations/student-form';
import {useSelector} from 'react-redux';
import {message} from 'antd';

const StudentProfilePage = () => {
	const personal = useSelector(state => state.StudentPersonalInfo);
	const validate = () => {
		const {error} = studentSchema.validate({...personal});

		error ? message.error(error.message) : message.success('Student Added Successfully');
	};
	return (
		<AdminLayout>
			<div className='w-full h-auto flex flex-col space-y-5'>
				<TopHeader/>
				<PersonalInfo/>
				<AddressInfo/>
				<ParentInfo/>
				<Button action={validate}>Apply Changes</Button>
			</div>
		</AdminLayout>
	);
};

export default StudentProfilePage;