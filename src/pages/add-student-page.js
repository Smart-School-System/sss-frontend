import React from 'react';
import AddressInfo from '../components/add-student/address-info';
import TopHeader from '../components/add-student/header';
import ParentInfo from '../components/add-student/parent-info';
import PersonalInfo from '../components/add-student/personal-info-form';
import {Button} from '../components/commons/button';
import { studentSchema } from '../helpers/form-validations/student-form';
import AdminLayout from '../layout/admin-layout';
import { useSelector } from 'react-redux';
import { message } from 'antd';

const AddStudentPage = () => {
    const personal = useSelector(state => state.StudentPersonalInfo);
    const validate = () => {
        const { error } = studentSchema.validate({ ...personal });

        error ? message.error(error.message) : message.success('Student Added Successfully');
    };
    return (
        <AdminLayout>
            <div className='w-full h-auto flex flex-col space-y-5'>
                <TopHeader />
                <PersonalInfo />
                <AddressInfo />
                <ParentInfo />
                <Button action={validate}>Add Student Now</Button>
            </div>
        </AdminLayout>
    );
};

export default AddStudentPage;