import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/admin-layout';
import AddressInfo from '../components/student-profile/address-info';
import TopHeader from '../components/student-profile/header';
import ParentInfo from '../components/student-profile/parent-info';
import PersonalInfo from '../components/student-profile/personal-info-form';
import { Button } from '../components/commons/button';
import { useParams } from "react-router-dom";
import { API } from '../libs/axiosClient';
import { Preloader } from '../components/commons/preloader';
import { message } from 'antd';


const StudentProfilePage = () => {
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(true)
    const id = useParams().id

    useEffect(() => {
        API.GET(`/students/student/${id}`)
            .then(res => {
                setStudent((res.data.data))
                setLoading(false)
            })
            .catch(err => message.error(err.message))
    })
    return (
        <AdminLayout>
            {
                loading ? <Preloader /> :
                    <div className='w-full h-auto flex flex-col space-y-5'>
                        <TopHeader />
                        <PersonalInfo data={student} />
                        <AddressInfo data={student} />
                        <ParentInfo data={student} />
                        {/*<Button action={validate}>Apply Changes</Button>*/}
                    </div>
            }
        </AdminLayout>
    );
};

export default StudentProfilePage;