import React, { useState } from 'react';
import AddressInfo from '../components/add-student/address-info';
import TopHeader from '../components/add-student/header';
import ParentInfo from '../components/add-student/parent-info';
import PersonalInfo from '../components/add-student/personal-info-form';
import { Button } from '../components/commons/button';
import { studentSchema } from '../helpers/form-validations/student-form';
import AdminLayout from '../layout/admin-layout';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { validateParentDetails } from '../helpers/form-validations/parent-details';
import { API } from '../libs/axiosClient';

const AddStudentPage = () => {
    const studentDetails = useSelector(state => state.StudentReducers);
    const [parents, setParents] = useState([])

    const validate = () => {
        const { error, value } = studentSchema.validate({ ...studentDetails });
        if (error) return message.error(error.message)
        parentValidator({...parents[0]})

        if (value) {
            message.success('Student Added Successfully');
            return { status: 200 }
        }
    };

    const parentValidator = (data) => {
        const { error } = validateParentDetails.validate({ ...data });
        return error && message.error(error.message)
    };

    const handleAddStudent = () => {
        console.log(JSON.stringify({ student: studentDetails, parents }))
        if (validate().status === 200)
        API.POST('/students/', {student: studentDetails, parents})
        .then(response => message.success(response.message))
        .catch(error => message.error(error.message))
    }

    return (
        <AdminLayout>
            <div className='w-full h-auto flex flex-col space-y-5 pb-6'>
                <TopHeader />
                <PersonalInfo />
                <AddressInfo />
                <ParentInfo parents={parents} setParents={setParents} />
                <div className="w-full flex justify-center items-center">
                    <Button action={handleAddStudent}>Add Student Now</Button>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AddStudentPage;