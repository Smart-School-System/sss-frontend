import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/admin-layout';
import { useParams } from "react-router-dom";
//import { API } from '../libs/axiosClient';
import { Preloader } from '../components/commons/preloader';
import Tabs from '../components/commons/tabs-toggle';
import BasicDetails from '../components/student-profile/basic-details';
import sampleImage from '../assets/images/cat.jpg'
import ProfileDetails from '../components/student-profile/profile-details';
//import { message } from 'antd';
import { useSelector } from 'react-redux';


const selectStudentById = (state, id) => {
    return state.PopulateStudents.find(student => student.id === id);
}

const StudentProfilePage = () => {
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(true)
    const [tab, setTab] = useState('Profile Details')
    const id = useParams().id

    const data = useSelector(state => selectStudentById(state, id));
    console.log(data)


    //useEffect(() => {
    //    //API.GET(`/students/student/${id}`)
    //    //    .then(res => {
    //    //        setStudent((res.data.data))
    //    //        setLoading(false)
    //    //    })
    //    //    .catch(err => {
    //    //        message.error(err.message)
    //    //    })

    //    setStudent([...data])
    //    console.log(data)
    //    setLoading(false)
    //})
    return (
        <AdminLayout>
            {
                loading ? <Preloader /> :
                    <div className='w-full h-auto flex space-x-10'>
                        <div className='flex flex-[0.3]'>
                            <BasicDetails first_name={student.first_name} last_name={student.last_name} profileImage={sampleImage} />
                        </div>
                        <div className='flex flex-col flex-[0.7]'>
                            <Tabs tabs={['Profile Details', 'Parent Details', 'Academic Details', 'Archives']} getTab={setTab} />
                            {tab === 'Profile Details' && <ProfileDetails />}
                            {tab === 'Parent Details' && <p>Parent Details</p>}
                            {tab === 'Academic Details' && <p>Academic Details</p>}
                            {tab === 'Archives' && <p>Archives</p>}
                        </div>
                    </div>
            }
        </AdminLayout>
    );
};

export default StudentProfilePage;