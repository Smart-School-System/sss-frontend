import React, { useEffect, useState } from 'react';
import AdminLayout from '../layout/admin-layout';
import ListStudents from '../components/list-students';
import JumbotronHeader from '../components/commons/jumbotron-top';
import { useSelector } from 'react-redux';

const StudentsPage = () => {
    const [studentsList, setStudentsList] = useState([])
    const list = useSelector(state => state.PopulateStudents);
    useEffect(() => {
        setStudentsList([...list])
    }, [list])
    return (
        <AdminLayout>
            <JumbotronHeader />
            <ListStudents data={studentsList}/>
        </AdminLayout>
    );
};

export default StudentsPage;