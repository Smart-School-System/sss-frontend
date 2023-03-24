import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdAdd } from 'react-icons/md';
import { BsFileEarmarkArrowDownFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import {Button} from './button';

const JumbotronHeader = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full flex flex-col justify-center items-start space-y-3 xl:flex-row xl:justify-between xl:items-center'>
			<div className='flex flex-col text-darkThemeTextLight text-base lg:flex-row lg:items-center space-x-2 border-[1px] border-gray-300 dark:border-darkThemeTextLight p-2 rounded-lg w-full'>
				<span className='flex items-center gap-1'><RiErrorWarningFill className='text-2xl text-darkFontColor dark:text-darkThemeTextLight'/>Setup a student page for your school.</span> 
				<span className='text-primaryBlue cursor-pointer hover:underline'>Learn more about adding a Student.</span>
			</div>
			<div className='flex items-center justify-between w-full xl:justify-end space-x-3'>
				<Button action={() => navigate('/student/new-student')} url={'/student/new-student'}><MdAdd/><span>Add Student</span></Button>
				<Button bgVariant={'bg-transparent'} textVariant={'text-primaryBlue'}><BsFileEarmarkArrowDownFill /><span>Download Report</span></Button>
			</div>
		</div>
	);
};

export default JumbotronHeader;