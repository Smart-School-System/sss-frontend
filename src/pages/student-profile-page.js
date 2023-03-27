import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/admin-layout';
import { Button } from '../components/commons/button';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { API } from '../libs/axiosClient';
import { Preloader } from '../components/commons/preloader';
import Tabs from '../components/commons/tabs-toggle';
import BasicDetails from '../components/student-profile/basic-details';
import sampleImage from '../assets/images/cat.jpg'
import ProfileDetails from '../components/student-profile/profile-details';


const StudentProfilePage = () => {
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(true)
    const [tab, setTab] = useState('Profile Details')
    const id = useParams().id

    useEffect(() => {
        API.GET(`/students/student/${id}`)
            .then(res => {
                setStudent((res.data.data))
                setLoading(false)
            })
            .catch(err => {
                toast.error(err.message)
            })
    })

    return (
        <AdminLayout>
            {
                loading ? <Preloader /> :
                    <div className='w-full h-auto flex space-x-10'>
                        <div className='flex flex-[0.3]'>
                            <BasicDetails first_name={student.first_name} last_name={student.last_name} profileImage={sampleImage} />
                        </div>
                        <div className='flex flex-col flex-[0.7]'>
                            <Tabs tabs={['Profile Details', 'Parent Details', 'Academic Details', 'Remarks']} getTab={setTab} />
                            {tab === 'Profile Details' && <ProfileDetails />}
                            {tab === 'Parent Details' && <p>Parent Details</p>}
                            {tab === 'Academic Details' && <p>Academic Details</p>}
                            {tab === 'Remarks' && <p>Remarks</p>}
                        </div>
                    </div>
            }
        </AdminLayout>
    );
};

export default StudentProfilePage;