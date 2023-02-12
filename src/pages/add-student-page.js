import React from 'react';
import AddressInfo from '../components/add-student/address-info';
import TopHeader from '../components/add-student/header';
import ParentInfo from '../components/add-student/parent-info';
import PersonalInfo from '../components/add-student/personal-info-form';
import Button from '../components/commons/button';
import {studentSchema} from '../helpers/form-validations/student-form';
import {useSelector} from 'react-redux';
import {message} from 'antd';

const AddStudentPage = () => {  
	message.config({
		top: 150,
		duration: 2,
		maxCount: 1,
	});
	const personal = useSelector(state => state.StudentPersonalInfo);
	const validate = () => {
		const {error} = studentSchema.validate({...personal});

		error ? message.error(error.message) : message.success('Student Added Successfully');
	};
	return (
		<div className='w-full h-auto flex flex-col space-y-5'>
			<TopHeader/>
			<PersonalInfo/>
			<AddressInfo/>
			<ParentInfo/>
			<Button action={validate}>Add Student Now</Button>
		</div>
	);
};

export default AddStudentPage;