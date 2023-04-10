import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bin, Pencil } from '../commons/special-icons';

const ListItem = (props) => {
    const navigate = useNavigate()
    const routeToStudentProfile = () => {
        navigate(`/student/student-profile/${props.id}`)
    }
    return (
        <div className='w-full bg-white dark:bg-transparent rounded-md grid grid-cols-7 py-4 px-3 cursor-pointer dark:text-gray-400 font-light hover:bg-[#E7F4FE]/75 dark:hover:bg-darkTheme1' style={{ transition: 'all 0.5s ease' }} onClick={routeToStudentProfile}>
            <div className="flex items-center justify-start space-x-10">
                <span>{props.id}</span>
            </div>
            <div className="flex items-center justify-start">
                <span>{props.name}</span>
            </div>
            <div className="flex items-center justify-start">
                <span>{props.gender}</span>
            </div>
            <div className="flex items-center justify-start">{props.class ? props.class : '3'}</div>
            <div className="flex items-center justify-start">{props.dob}</div>
            <div className="flex items-center justify-start">{props.address}</div>
            <div className="flex items-center justify-center space-x-7 text-primaryBlue">
                <Bin onClick={() => props.delete()} />
                <Pencil className='text-primaryBlue' onClick={() => props.edit()} />
            </div>
        </div>
    );
};

export default ListItem; 