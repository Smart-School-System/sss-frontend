import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import user from '../../assets/images/cat.jpg';
import { useNavigate } from 'react-router-dom';
import { Bin, Pencil } from '../commons/special-icons';

const GridItem = (props) => {
    const [isPopped, setIsPopped] = useState(false);
    const navigate = useNavigate()

    const routeToStudentProfile = () => {
        navigate(`/student/student-profile/${props.id}`)
    }
    return (
        <div className="flex flex-col md:flex-row bg-white dark:bg-darkTheme1 relative shadow-md rounded-lg overflow-hidden dark:text-darkThemeTextLight">
            {/* Hoverable dropdown component */}
            <div className='flex-[1] absolute top-5 right-5 flex justify-end items-center cursor-pointer bg-gray-200/75 dark:bg-darkTheme2 rounded-xl p-1 text-darkThemeTextLight/95 dark:text-darkThemeTextLight/50' onMouseEnter={() => setIsPopped(true)} onMouseLeave={() => setIsPopped(false)}>
                <BsThreeDotsVertical />
                <div className={`${!isPopped && 'hidden'} flex-col space-y-3 bg-white dark:bg-darkTheme1 border-transparent dark:border-darkTheme3 absolute top-[24px] -right-[50px] drop-shadow-md w-fit h-auto p-2 rounded-lg`}>
                    <span className='flex justify-start p-2 px-5 items-center space-x-3 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg text-sm' onClick={() => { }}>
                        <Pencil className='text-primaryBlue' />
                        <span>Edit</span>
                    </span>
                    <span className='flex justify-start p-2 px-5 items-center space-x-3 text-greyFontColor dark:text-darkThemeTextLight dark:hover:bg-darkTheme3 hover:text-primaryBlue hover:bg-lightBlue rounded-lg text-sm' onClick={() => { }}>
                        <Bin /><span>Delete</span>
                    </span>
                </div>
            </div>

            <div className="md:w-1/3">
                <img src={user} alt="user profile pic" className='w-full h-auto rounded-full p-4' />
            </div>
            <div className="p-4 md:w-2/3">
                <h2 className="font-medium text-2xl mb-1">{props.name}</h2>
                <p className="text-gray-700 text-base mb-1">{props.gender}</p>
                <p className="text-gray-700 text-base">{props.dob}</p>
                <button className='block w-1/2 my-4 bg-black rounded-lg p-1 dark:text-white border-2' onClick={routeToStudentProfile}>View Profile</button>
            </div>
        </div>
    );
};

export default GridItem;